import React, { useEffect, useState } from 'react';
import { APP_NAME, APP_VERSION } from '../constants';
import CodeIcon from './icons/CodeIcon';

interface SplashScreenProps {
  onFinished: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinished }) => {
  const splashDuration = 3000; // 3 seconds
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(onFinished, splashDuration);
    
    // Animate progress bar
    let startTime: number | null = null;
    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const currentProgress = Math.min((elapsedTime / splashDuration) * 100, 100);
      setProgress(currentProgress);
      if (elapsedTime < splashDuration) {
        requestAnimationFrame(animateProgress);
      }
    };
    requestAnimationFrame(animateProgress);

    return () => {
      clearTimeout(timer);
    };
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-900 p-6 text-white overflow-hidden">
      <div className="flex flex-col items-center justify-center flex-grow">
        <CodeIcon className="w-24 h-24 sm:w-32 sm:h-32 text-sky-400 animate-pulse-scale mb-6" />
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-300 mb-3 animate-fadeInUpSlight">
          {APP_NAME}
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 animate-fadeInUpSlight animation-delay-200">
          لحظات ونبدأ رحلتنا في عالم الأكواد...
        </p>
      </div>
      
      <div className="w-full max-w-md mb-8 px-4">
        <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-sky-500 to-teal-400 rounded-full transition-all duration-150 ease-linear" 
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
            aria-label="تحميل التطبيق"
          >
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-4 animate-fadeIn animation-delay-1000">{`الإصدار ${APP_VERSION}`}</p>
    </div>
  );
};

export default SplashScreen;