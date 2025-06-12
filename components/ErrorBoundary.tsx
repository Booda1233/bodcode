import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div role="alert" className="flex flex-col items-center justify-center h-full p-6 sm:p-8 bg-slate-800/80 rounded-xl shadow-2xl border border-red-500/70 text-center text-gray-200 my-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 sm:h-20 sm:w-20 text-red-400 mb-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-3">عفواً، حدث خطأ ما</h2>
          <p className="text-md sm:text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
            نواجه مشكلة في عرض هذا الجزء من التطبيق. نرجو محاولة إعادة تحميل الصفحة.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-8 rounded-lg text-md transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-sky-500/30 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            إعادة تحميل الصفحة
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;