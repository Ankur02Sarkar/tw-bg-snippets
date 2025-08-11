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
    if (!background || !React.isValidElement(background)) {
      return [];
    }

    const colors: ExtractedColor[] = [];
    const foundColors = new Set<string>();
    
    // Function to recursively extract colors from element and its children
    const extractFromElement = (element: React.ReactElement): void => {
      const props = element.props as any;
      
      // Extract from className
      if (props.className && typeof props.className === 'string') {
        const className = props.className;
        
        // More comprehensive Tailwind color regex
         const tailwindColorRegex = /(?:bg|text|border|from|via|to)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950)|(?:bg|text|border)-(?:white|black|transparent)/g;
         const tailwindMatches = className.match(tailwindColorRegex) || [];
         tailwindMatches.forEach((match: string) => foundColors.add(match));
         
         // Extract hex/rgba/hsl colors
         const colorRegex = /#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\)/g;
         const colorMatches = className.match(colorRegex) || [];
         colorMatches.forEach((match: string) => foundColors.add(match));
      }
      
      // Extract from style object
      if (props.style && typeof props.style === 'object') {
        Object.entries(props.style).forEach(([key, value]) => {
          if (typeof value === 'string' && (key.includes('color') || key.includes('Color') || key.includes('background') || key.includes('Background'))) {
            const colorRegex = /#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\)/g;
            const matches = value.match(colorRegex) || [];
            matches.forEach(match => foundColors.add(match));
          }
        });
      }
      
      // Check for CSS custom properties and gradients
      if (props.style && typeof props.style === 'object') {
        const styleString = JSON.stringify(props.style);
        const gradientRegex = /(?:linear-gradient|radial-gradient|conic-gradient)\([^)]+\)/g;
        const gradientMatches = styleString.match(gradientRegex) || [];
        gradientMatches.forEach(gradient => {
          const colorRegex = /#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\)/g;
          const colors = gradient.match(colorRegex) || [];
          colors.forEach(color => foundColors.add(color));
        });
      }
      
      // Recursively check children
      if (props.children) {
        React.Children.forEach(props.children, (child) => {
          if (React.isValidElement(child)) {
            extractFromElement(child);
          }
        });
      }
    };
    
    extractFromElement(background);
    
    // Convert found colors to ExtractedColor objects
    Array.from(foundColors).forEach((color, index) => {
      let hexColor = color;
      let displayLabel = `Color ${index + 1}`;
      
      // Handle different color formats
      if (color.startsWith('#')) {
        // Handle 3-digit hex colors
        if (color.length === 4) {
          hexColor = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
        }
        displayLabel = `Hex ${color}`;
      } else if (color.startsWith('rgb')) {
        // Convert rgba to hex
        const rgbaMatch = color.match(/\d+/g);
        if (rgbaMatch && rgbaMatch.length >= 3) {
          const r = parseInt(rgbaMatch[0]);
          const g = parseInt(rgbaMatch[1]);
          const b = parseInt(rgbaMatch[2]);
          hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        }
        displayLabel = `RGB ${color}`;
      } else if (color.startsWith('hsl')) {
        // For HSL, we'll keep the original and try to convert
        displayLabel = `HSL ${color}`;
        // Simple HSL to hex conversion would go here, for now keep original
        hexColor = color;
      } else if (color.includes('-')) {
        // Handle Tailwind color classes
        const parts = color.split('-');
        if (parts.length >= 2) {
          displayLabel = parts.slice(1).join(' ').replace(/\d+/g, (num) => `${num}`);
          hexColor = getTailwindColorHex(color);
        }
      }
      
      colors.push({
        id: `color-${index}`,
        label: displayLabel,
        value: hexColor,
        originalValue: color,
      });
    });
    
    return colors;
  };

  // Helper function to convert Tailwind color classes to hex values
   const getTailwindColorHex = (tailwindClass: string): string => {
     const colorMap: Record<string, string> = {
       'bg-white': '#ffffff',
       'bg-black': '#000000',
       'bg-slate-50': '#f8fafc', 'bg-slate-100': '#f1f5f9', 'bg-slate-200': '#e2e8f0',
       'bg-slate-300': '#cbd5e1', 'bg-slate-400': '#94a3b8', 'bg-slate-500': '#64748b',
       'bg-slate-600': '#475569', 'bg-slate-700': '#334155', 'bg-slate-800': '#1e293b',
       'bg-slate-900': '#0f172a', 'bg-slate-950': '#020617',
       'bg-red-50': '#fef2f2', 'bg-red-100': '#fee2e2', 'bg-red-200': '#fecaca',
       'bg-red-300': '#fca5a5', 'bg-red-400': '#f87171', 'bg-red-500': '#ef4444',
       'bg-red-600': '#dc2626', 'bg-red-700': '#b91c1c', 'bg-red-800': '#991b1b',
       'bg-red-900': '#7f1d1d', 'bg-red-950': '#450a0a',
       'bg-blue-50': '#eff6ff', 'bg-blue-100': '#dbeafe', 'bg-blue-200': '#bfdbfe',
       'bg-blue-300': '#93c5fd', 'bg-blue-400': '#60a5fa', 'bg-blue-500': '#3b82f6',
       'bg-blue-600': '#2563eb', 'bg-blue-700': '#1d4ed8', 'bg-blue-800': '#1e40af',
       'bg-blue-900': '#1e3a8a', 'bg-blue-950': '#172554',
       'bg-fuchsia-50': '#fdf4ff', 'bg-fuchsia-100': '#fae8ff', 'bg-fuchsia-200': '#f5d0fe',
       'bg-fuchsia-300': '#f0abfc', 'bg-fuchsia-400': '#e879f9', 'bg-fuchsia-500': '#d946ef',
       'bg-fuchsia-600': '#c026d3', 'bg-fuchsia-700': '#a21caf', 'bg-fuchsia-800': '#86198f',
       'bg-fuchsia-900': '#701a75', 'bg-fuchsia-950': '#4a044e',
       'bg-neutral-50': '#fafafa', 'bg-neutral-100': '#f5f5f5', 'bg-neutral-200': '#e5e5e5',
       'bg-neutral-300': '#d4d4d4', 'bg-neutral-400': '#a3a3a3', 'bg-neutral-500': '#737373',
       'bg-neutral-600': '#525252', 'bg-neutral-700': '#404040', 'bg-neutral-800': '#262626',
       'bg-neutral-900': '#171717', 'bg-neutral-950': '#0a0a0a',
       'bg-sky-50': '#f0f9ff', 'bg-sky-100': '#e0f2fe', 'bg-sky-200': '#bae6fd',
       'bg-sky-300': '#7dd3fc', 'bg-sky-400': '#38bdf8', 'bg-sky-500': '#0ea5e9',
       'bg-sky-600': '#0284c7', 'bg-sky-700': '#0369a1', 'bg-sky-800': '#075985',
       'bg-sky-900': '#0c4a6e', 'bg-sky-950': '#082f49'
     };
     
     return colorMap[tailwindClass] || '#000000';
   };

   // Helper function to find the closest Tailwind class for a given hex color
   const getClosestTailwindClass = (hexColor: string, originalClass: string): string => {
     // For simplicity, if the user changes a Tailwind color, we'll use CSS custom properties
     // This allows for more precise color control while maintaining the class structure
     return `[background-color:${hexColor}]`;
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
            if (colorObj.originalValue.startsWith('bg-')) {
              // Handle Tailwind color class replacement
              const newTailwindClass = getClosestTailwindClass(colorObj.value, colorObj.originalValue);
              modifiedClassName = modifiedClassName.replace(
                new RegExp(colorObj.originalValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
                newTailwindClass
              );
            } else {
              // Handle hex/rgba color replacement
              modifiedClassName = modifiedClassName.replace(
                new RegExp(colorObj.originalValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
                colorObj.value
              );
            }
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

  // Only show if colors are found
   if (extractedColors.length === 0) {
     return null;
   }

   return (
     <div className="fixed bottom-4 right-4 z-50 colorModifier">
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
               {backgroundName} • {extractedColors.length} colors found
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