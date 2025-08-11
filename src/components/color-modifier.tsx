"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { ColorPicker } from '@/components/ui/color-picker';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, RotateCcw, Eye, EyeOff } from 'lucide-react';

interface ColorModifierProps {
  currentBackground: React.ReactNode;
  onBackgroundChange: (modifiedBackground: React.ReactNode) => void;
  backgroundName: string;
}

interface ExtractedColor {
  id: string;
  label: string;
  value: string;
  originalValue: string;
}

const ColorModifier: React.FC<ColorModifierProps> = ({
  currentBackground,
  onBackgroundChange,
  backgroundName,
}) => {
  const [extractedColors, setExtractedColors] = useState<ExtractedColor[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Extract colors from the background component
  const extractColorsFromBackground = (background: React.ReactNode): ExtractedColor[] => {
    if (!background || !React.isValidElement(background)) return [];

    const colors: ExtractedColor[] = [];
    const colorRegex = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|rgba?\([^)]+\)|hsla?\([^)]+\)/g;
    
    // Convert React element to string to extract colors
    const elementString = JSON.stringify(background.props);
    const matches = elementString.match(colorRegex) || [];
    
    // Remove duplicates and create color objects
    const uniqueColors = [...new Set(matches)];
    
    uniqueColors.forEach((color, index) => {
      // Convert various color formats to hex for the color picker
      let hexColor = color;
      
      // Handle rgba colors
      if (color.startsWith('rgba(') || color.startsWith('rgb(')) {
        const rgbaMatch = color.match(/\d+/g);
        if (rgbaMatch && rgbaMatch.length >= 3) {
          const r = parseInt(rgbaMatch[0]);
          const g = parseInt(rgbaMatch[1]);
          const b = parseInt(rgbaMatch[2]);
          hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        }
      }
      
      // Handle 3-digit hex colors
      if (color.match(/^#[0-9a-fA-F]{3}$/)) {
        hexColor = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
      }
      
      colors.push({
        id: `color-${index}`,
        label: `Color ${index + 1}`,
        value: hexColor,
        originalValue: color,
      });
    });
    
    return colors;
  };

  // Initialize colors when background changes
  useEffect(() => {
    const colors = extractColorsFromBackground(currentBackground);
    setExtractedColors(colors);
  }, [currentBackground]);

  // Create modified background with new colors
  const createModifiedBackground = useMemo(() => {
    if (!currentBackground || !React.isValidElement(currentBackground)) {
      return currentBackground;
    }

    // Clone the element and modify its props
    const modifyElement = (element: React.ReactElement): React.ReactElement => {
      let modifiedProps: any = Object.assign({}, element.props);
      
      // Modify className if it exists
      if (modifiedProps.className) {
        let modifiedClassName = modifiedProps.className;
        
        extractedColors.forEach((colorObj) => {
          if (colorObj.value !== colorObj.originalValue) {
            // Replace the original color with the new color in className
            modifiedClassName = modifiedClassName.replace(
              new RegExp(colorObj.originalValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
              colorObj.value
            );
          }
        });
        
        modifiedProps.className = modifiedClassName;
      }
      
      // Modify style if it exists
      if (modifiedProps.style && typeof modifiedProps.style === 'object') {
        const modifiedStyle: Record<string, any> = Object.assign({}, modifiedProps.style);
        
        Object.keys(modifiedStyle).forEach((key) => {
          const styleValue = modifiedStyle[key];
          if (typeof styleValue === 'string') {
            extractedColors.forEach((colorObj) => {
              if (colorObj.value !== colorObj.originalValue) {
                modifiedStyle[key] = styleValue.replace(
                  new RegExp(colorObj.originalValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
                  colorObj.value
                );
              }
            });
          }
        });
        
        modifiedProps.style = modifiedStyle;
      }
      
      // Recursively modify children
      if (modifiedProps.children) {
        if (React.isValidElement(modifiedProps.children)) {
          modifiedProps.children = modifyElement(modifiedProps.children);
        } else if (Array.isArray(modifiedProps.children)) {
          modifiedProps.children = modifiedProps.children.map((child: any) => {
            return React.isValidElement(child) ? modifyElement(child) : child;
          });
        }
      }
      
      return React.cloneElement(element, modifiedProps);
    };

    return modifyElement(currentBackground);
  }, [currentBackground, extractedColors]);

  // Update background when colors change
  useEffect(() => {
    onBackgroundChange(createModifiedBackground);
  }, [createModifiedBackground, onBackgroundChange]);

  const handleColorChange = (colorId: string, newColor: string) => {
    setExtractedColors(prev => 
      prev.map(color => 
        color.id === colorId ? { ...color, value: newColor } : color
      )
    );
  };

  const resetColors = () => {
    setExtractedColors(prev => 
      prev.map(color => ({ ...color, value: color.originalValue }))
    );
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (extractedColors.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <Button
        onClick={toggleVisibility}
        className="mb-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900"
        size="sm"
      >
        <Palette className="h-4 w-4 mr-2" />
        {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </Button>

      {/* Color Modifier Panel */}
      {isVisible && (
        <Card className="w-80 max-h-96 overflow-y-auto bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center justify-between">
              <span>Color Modifier</span>
              <Button
                onClick={resetColors}
                variant="outline"
                size="sm"
                className="h-7 px-2 text-xs"
              >
                <RotateCcw className="h-3 w-3 mr-1" />
                Reset
              </Button>
            </CardTitle>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {backgroundName}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {extractedColors.map((color) => (
              <ColorPicker
                key={color.id}
                label={color.label}
                value={color.value}
                onChange={(newColor) => handleColorChange(color.id, newColor)}
                className="text-xs"
              />
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ColorModifier;