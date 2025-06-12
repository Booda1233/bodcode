import React from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { Level, Lesson, LessonContentPart } from '../types';
import { ROUTES } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';
import CodeBlock from '../components/CodeBlock';
import { isLessonUnlocked } from '../utils/lessonProgress';
import LockClosedIcon from '../components/icons/LockClosedIcon';

interface LessonDetailsPageProps {
  levels: Level[];
  completedLessons: string[];
}

const renderContentPart = (part: LessonContentPart, index: number) => {
  switch (part.type) {
    case 'heading':
      return <h2 key={index} className="text-3xl font-semibold text-sky-300 mt-10 mb-5 border-b border-slate-700/80 pb-3">{part.text}</h2>;
    case 'subheading':
      return <h3 key={index} className="text-2xl font-semibold text-sky-400 mt-8 mb-4">{part.text}</h3>;
    case 'paragraph':
      return <p key={index} className="text-gray-300 leading-relaxed my-4 text-lg whitespace-pre-line">{part.text}</p>;
    case 'code':
      return <CodeBlock key={index} code={part.text} language={part.language || 'python'} />;
    case 'list':
      return (
        <div key={index} className="my-5">
          {part.text && <p className="text-lg text-gray-200 mb-2 font-medium">{part.text}</p>}
          <ul className="list-disc list-inside text-gray-300 pl-6 rtl:pr-6 space-y-2 text-lg">
            {part.items?.map((item, itemIndex) => <li key={itemIndex} className="leading-relaxed">{item}</li>)}
          </ul>
        </div>
      );
    default:
      return null;
  }
};

const LessonDetailsPage: React.FC<LessonDetailsPageProps> = ({ levels, completedLessons }) => {
  const { levelSlug, lessonSlug } = useParams<{ levelSlug: string; lessonSlug: string }>();
  const navigate = useNavigate();
  
  const currentLevel = levels.find(l => l.slug === levelSlug);
  const currentLesson = currentLevel?.lessons.find(l => l.slug === lessonSlug);

  if (!currentLevel || !currentLesson) {
    return <Navigate to={ROUTES.CURRICULUM} replace />;
  }

  const unlocked = isLessonUnlocked(currentLevel.slug, currentLesson.slug, levels, completedLessons);

  const breadcrumbItems = [
    { label: 'الرئيسية', path: ROUTES.HOME },
    { label: 'الدروس', path: ROUTES.CURRICULUM },
    { label: currentLevel.title, path: ROUTES.LEVEL_DETAILS.replace(':levelSlug', currentLevel.slug) },
    { label: currentLesson.title },
  ];

  if (!unlocked) {
    return (
      <div>
        <Breadcrumbs items={breadcrumbItems.slice(0, -1)} /> {/* Show breadcrumbs up to the level */}
        <div className="text-center bg-slate-800/80 p-8 sm:p-12 rounded-xl shadow-2xl border border-yellow-500/70 backdrop-blur-sm my-10">
          <LockClosedIcon className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-5">الدرس مقفل</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
            يجب عليك إكمال الدروس السابقة في هذا المستوى أو المستويات السابقة لفتح هذا الدرس.
          </p>
          <button
            onClick={() => navigate(ROUTES.LEVEL_DETAILS.replace(':levelSlug', currentLevel.slug))}
            className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-8 rounded-lg text-md transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-sky-500/30"
          >
            العودة إلى دروس المستوى
          </button>
        </div>
      </div>
    );
  }

  const quizPath = ROUTES.LESSON_QUIZ.replace(':levelSlug', currentLevel.slug).replace(':lessonSlug', currentLesson.slug);

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <article className="bg-slate-800/80 p-6 sm:p-10 rounded-xl shadow-2xl border border-slate-700/80 backdrop-blur-sm">
        <header className="mb-8 border-b border-slate-700/80 pb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">{currentLesson.title}</h1>
          <p className="text-lg text-gray-400">{currentLesson.description}</p>
        </header>
        
        <div className="prose prose-invert max-w-none 
                        prose-p:text-gray-300 prose-p:text-lg prose-p:leading-relaxed prose-p:my-4 prose-p:whitespace-pre-line
                        prose-headings:text-sky-400 
                        prose-h2:text-sky-300 prose-h2:border-b prose-h2:border-slate-700/80 prose-h2:pb-3
                        prose-h3:text-sky-400
                        prose-strong:text-sky-300 
                        prose-a:text-sky-400 hover:prose-a:text-sky-300
                        prose-ul:list-disc prose-ul:list-inside prose-ul:pl-6 prose-ul:rtl:pr-6 prose-ul:space-y-2 prose-ul:text-lg prose-ul:leading-relaxed
                        prose-li:text-gray-300 
                        prose-code:bg-slate-700/80 prose-code:text-sky-300 prose-code:p-1 prose-code:px-1.5 prose-code:rounded-md prose-code:text-base prose-code:font-mono">
          {currentLesson.content.map(renderContentPart)}
        </div>

        {currentLesson.quiz && currentLesson.quiz.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-700/80 text-center">
            <Link
              to={quizPath}
              className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-bold py-3.5 px-10 rounded-lg text-lg 
                         transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl
                         focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              ابدأ الاختبار ({currentLesson.quiz.length} أسئلة)
            </Link>
          </div>
        )}
      </article>
    </div>
  );
};

export default LessonDetailsPage;