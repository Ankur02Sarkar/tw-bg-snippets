import React from 'react';
import ReactDOMServer from 'react-dom/server';
import toast from 'react-hot-toast';

type PlaygroundProps = {
  children: React.ReactElement;
  setPreview: (preview: React.ReactNode) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  name: string;
};

const Playground: React.FC<PlaygroundProps> = ({
  children,
  setPreview,
  theme,
  setTheme,
  name,
}) => {
  const copyCode = () => {
    const code = ReactDOMServer.renderToString(children);

    navigator.clipboard.writeText(code);
    toast.success('Copied to clipboard');
  };

  return (
    <>
      <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
        <div className="absolute left-4 top-4 z-10 cursor-pointer">
          <div className="flex flex-row gap-4">
            <div
              className="rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white"
              onClick={() => {
                setPreview(children);
                setTheme(theme);
              }}
            >
              preview
            </div>
            <div
              className="rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white"
              onClick={copyCode}
            >
              copy code
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 z-10">
          <div className="rounded-md bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 border border-gray-200/50 dark:border-gray-700/50">
            {name}
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Playground;
