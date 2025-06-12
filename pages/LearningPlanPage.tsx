import React, { useState } from 'react';
import { LearningStep, Level } from '../types';
import Breadcrumbs from '../components/Breadcrumbs';
import { ROUTES } from '../constants';
import { useNavigate } from 'react-router-dom';
import CodeIcon from '../components/icons/CodeIcon';
import LockClosedIcon from '../components/icons/LockClosedIcon';
import CheckBadgeIcon from '../components/icons/CheckBadgeIcon';
import { isLessonUnlocked, isLessonCompleted } from '../utils/lessonProgress';

interface StepItemProps {
  step: LearningStep;
  level: number;
  levels: Level[];
  completedLessons: string[];
}

const StepItem: React.FC<StepItemProps> = ({ step, level, levels, completedLessons }) => {
  const [isOpen, setIsOpen] = useState(level < 1); 
  const navigate = useNavigate();

  const isMainStep = level === 0;
  const canToggle = step.subSteps && step.subSteps.length > 0;
  
  let unlocked = true;
  let completed = false;
  let linkPath: string | undefined = undefined;

  if (step.relatedLessonSlug && step.relatedLevelSlug) {
    linkPath = ROUTES.LESSON_DETAILS.replace(':levelSlug', step.relatedLevelSlug).replace(':lessonSlug', step.relatedLessonSlug);
    unlocked = isLessonUnlocked(step.relatedLevelSlug, step.relatedLessonSlug, levels, completedLessons);
    completed = isLessonCompleted(step.relatedLessonSlug, completedLessons);
  } else if (canToggle) {
    // For parent steps, consider it "completed" if all its sub-lesson-steps are completed
    // And "unlocked" if at least one sub-lesson-step is unlocked
    // This is a simplification; more complex logic might be needed for true parent step status
    const subLessonSteps = step.subSteps?.filter(s => s.relatedLessonSlug && s.relatedLevelSlug) || [];
    if (subLessonSteps.length > 0) {
        completed = subLessonSteps.every(s => isLessonCompleted(s.relatedLessonSlug!, completedLessons));
        unlocked = subLessonSteps.some(s => isLessonUnlocked(s.relatedLevelSlug!, s.relatedLessonSlug!, levels, completedLessons));
    }
  }


  const handleClick = () => {
    if (linkPath && unlocked) {
      navigate(linkPath);
    } else if (canToggle) {
      setIsOpen(!isOpen);
    }
  };
  
  const baseClasses = "p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out";
  const interactiveClasses = unlocked && (canToggle || linkPath) 
    ? "cursor-pointer bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/70 hover:border-sky-500/80 hover:shadow-sky-500/10 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-900"
    : "bg-slate-800/50 border border-slate-700/50 opacity-70 cursor-not-allowed";

  return (
    <div className={`my-2.5 ${level > 0 ? 'mr-3 rtl:ml-3 rtl:mr-0' : ''}`}>
      <div 
        className={`${baseClasses} ${interactiveClasses}`}
        onClick={handleClick}
        role={unlocked && (canToggle || linkPath) ? "button" : "listitem"}
        aria-expanded={canToggle ? isOpen : undefined}
        aria-disabled={!unlocked}
        tabIndex={unlocked && (canToggle || linkPath) ? 0 : -1}
        onKeyDown={ (e) => { if(unlocked && (e.key === 'Enter' || e.key === ' ') && (canToggle || linkPath)) { e.preventDefault(); handleClick(); } } }
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {completed && linkPath && <CheckBadgeIcon className="w-5 h-5 text-green-400 ml-2 rtl:mr-2 rtl:ml-0 flex-shrink-0" />}
            {!unlocked && linkPath && <LockClosedIcon className="w-5 h-5 text-yellow-500 ml-2 rtl:mr-2 rtl:ml-0 flex-shrink-0" />}
            {unlocked && linkPath && !completed && <CodeIcon className="w-5 h-5 text-sky-400 ml-2 rtl:mr-2 rtl:ml-0 flex-shrink-0" />}
            
            <h3 className={`text-lg font-semibold ${linkPath && unlocked ? 'text-sky-400 group-hover:text-sky-300' : unlocked ? 'text-gray-100' : 'text-gray-500'}`}>
              {step.title}
            </h3>
          </div>
          {canToggle && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transform transition-transform duration-300 ease-out ${isOpen ? 'rotate-90' : 'rotate-0'} ${unlocked ? 'text-sky-400' : 'text-gray-600'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
        <p className={`text-sm mt-1.5 pr-1 rtl:pl-1 ${unlocked ? 'text-gray-400' : 'text-gray-500'}`}>{step.description}</p>
        {linkPath && unlocked && !canToggle && <p className="text-xs text-sky-500 hover:text-sky-400 mt-2.5">🔗 الانتقال إلى الدرس</p>}
      </div>
      {isOpen && step.subSteps && (
        <div className={`mt-2 ${level > 0 ? 'pl-3 rtl:pr-3' : 'pl-1.5 rtl:pr-1.5'} border-l-2 rtl:border-r-2 rtl:border-l-0 ${unlocked || isMainStep ? 'border-sky-600/70' : 'border-gray-600/70'}`}>
          {step.subSteps.map(subStep => (
            <StepItem key={subStep.id} step={subStep} level={level + 1} levels={levels} completedLessons={completedLessons} />
          ))}
        </div>
      )}
    </div>
  );
};

interface LearningPlanPageProps {
  learningPlan: LearningStep[];
  levels: Level[];
  completedLessons: string[];
}

const LearningPlanPage: React.FC<LearningPlanPageProps> = ({ learningPlan, levels, completedLessons }) => {
  const breadcrumbItems = [
    { label: 'الرئيسية', path: ROUTES.HOME },
    { label: 'خطة التعلم' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold text-sky-400 mb-6 text-center">خطة تعلم بايثون الشاملة</h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-3xl mx-auto">
        اتبع هذه الخطة المنظمة خطوة بخطوة لتتقن لغة بايثون من الأساسيات وحتى المفاهيم المتقدمة. كل خطوة مصممة لتبني على ما قبلها.
      </p>
      <div className="space-y-1">
        {learningPlan.map(step => (
          <StepItem key={step.id} step={step} level={0} levels={levels} completedLessons={completedLessons} />
        ))}
      </div>
    </div>
  );
};

export default LearningPlanPage;