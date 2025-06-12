import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Level, Lesson } from '../types';
import { ROUTES } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';
import { isLessonUnlocked, isLessonCompleted } from '../utils/lessonProgress';
import LockClosedIcon from '../components/icons/LockClosedIcon';
import CheckBadgeIcon from '../components/icons/CheckBadgeIcon';

interface LevelDetailsPageProps {
  levels: Level[];
  completedLessons: string[];
}

const LevelDetailsPage: React.FC<LevelDetailsPageProps> = ({ levels, completedLessons }) => {
  const { levelSlug } = useParams<{ levelSlug: string }>();
  const currentLevel = levels.find(l => l.slug === levelSlug);

  if (!currentLevel) {
    return <Navigate to={ROUTES.CURRICULUM} replace />;
  }

  const breadcrumbItems = [
    { label: 'الرئيسية', path: ROUTES.HOME },
    { label: 'الدروس', path: ROUTES.CURRICULUM },
    { label: currentLevel.title },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="text-center mb-12">
        {currentLevel.icon && (
          <div className="flex justify-center mb-4 h-24">
            {React.cloneElement(currentLevel.icon as React.ReactElement<{ className?: string }>, { className: 'w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]' })}
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">{currentLevel.title}</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">{currentLevel.description}</p>
      </div>
      
      <div className="space-y-5">
        {currentLevel.lessons.map((lesson: Lesson, index: number) => {
          const unlocked = isLessonUnlocked(currentLevel.slug, lesson.slug, levels, completedLessons);
          const completed = isLessonCompleted(lesson.slug, completedLessons);

          const lessonElement = (
            <div
              className={`block p-5 sm:p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out group border 
                         ${unlocked 
                           ? 'bg-slate-800/80 hover:bg-slate-700/90 border-slate-700/80 hover:border-sky-500/70 hover:shadow-sky-500/10 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-60 focus:ring-offset-2 focus:ring-offset-gray-900' 
                           : 'bg-slate-800/50 border-slate-700/50 opacity-60 cursor-not-allowed'
                         }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-grow">
                  <h3 className={`text-xl font-semibold mb-1.5 transition-colors duration-300 ${unlocked ? 'text-sky-400 group-hover:text-sky-300' : 'text-gray-500'}`}>
                    الدرس {index + 1}: {lesson.title}
                  </h3>
                  <p className={`text-sm ${unlocked ? 'text-gray-400' : 'text-gray-500'}`}>{lesson.description}</p>
                </div>
                <div className="flex items-center flex-shrink-0 ml-4 rtl:mr-4 rtl:ml-0">
                  {completed && (
                    <CheckBadgeIcon className="w-6 h-6 text-green-400 mr-2 rtl:ml-2 rtl:mr-0"/>
                  )}
                  {!unlocked && (
                    <LockClosedIcon className="w-6 h-6 text-yellow-500"/>
                  )}
                  {unlocked && !completed && (
                    <span className="text-sky-400 transform transition-all duration-300 group-hover:text-sky-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 flex items-center group-hover:scale-105">
                      ابدأ الدرس 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1.5 rtl:mr-1.5 rtl:ml-0 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
          
          if (unlocked) {
            return (
              <Link
                key={lesson.id}
                to={ROUTES.LESSON_DETAILS.replace(':levelSlug', currentLevel.slug).replace(':lessonSlug', lesson.slug)}
                aria-label={`الانتقال إلى درس ${lesson.title}`}
              >
                {lessonElement}
              </Link>
            );
          }
          return (
            <div key={lesson.id} aria-label={`درس ${lesson.title} (مقفل)`}>
              {lessonElement}
            </div>
          );
        })}
      </div>
      {currentLevel.lessons.length === 0 && (
        <p className="text-center text-gray-400 text-lg mt-10 bg-slate-800/70 p-6 rounded-lg shadow-md border border-slate-700/80">
          لا توجد دروس متاحة في هذا المستوى حاليًا. نعمل على إضافتها قريبًا، تابعنا!
        </p>
      )}
    </div>
  );
};

export default LevelDetailsPage;