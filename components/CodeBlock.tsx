import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python' }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-slate-800/70 rounded-xl shadow-lg my-6 relative group border border-slate-700/80">
      <div className="bg-slate-700/80 px-4 py-2 rounded-t-xl flex justify-between items-center border-b border-slate-600/70">
        <span className="text-xs text-gray-300 font-mono select-none">{language}</span>
        <button
          onClick={copyToClipboard}
          className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700
            ${copied 
              ? 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-400 shadow-md' 
              : 'bg-sky-600 text-gray-100 hover:bg-sky-500 focus:ring-sky-400 hover:shadow-md'
            }`}
          aria-label={copied ? 'تم نسخ الكود' : 'نسخ الكود'}
        >
          {copied ? 'تم النسخ!' : 'نسخ'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-gray-900/80 rounded-b-xl">
        <code className={`language-${language} text-sm text-gray-200 block whitespace-pre-wrap`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;