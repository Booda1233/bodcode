import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { Level, Question } from '../types';
import { ROUTES } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import XCircleIcon from '../components/icons/XCircleIcon';
import { isLessonUnlocked } from '../utils/lessonProgress'; // For initial access check

interface QuizPageProps {
  levels: Level[];
  onQuizComplete: (lessonSlug: string) => void;
  completedLessons: string[]; // To check if quiz can be accessed
}

const QuizPage: React.FC<QuizPageProps> = ({ levels, onQuizComplete, completedLessons }) => {
  const { levelSlug, lessonSlug } = useParams<{ levelSlug: string; lessonSlug: string }>();
  const navigate = useNavigate();
  
  const currentLevel = levels.find(l => l.slug === levelSlug);
  const currentLesson = currentLevel?.lessons.find(l => l.slug === lessonSlug);
  const quizQuestions = currentLesson?.quiz || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Reset state if slugs change (e.g., navigating directly to another quiz)
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  }, [levelSlug, lessonSlug]);

  if (!currentLevel || !currentLesson) {
    return <Navigate to={ROUTES.CURRICULUM} replace />;
  }
  
  // Check if the lesson (and thus quiz) is unlocked before rendering
  const lessonUnlocked = isLessonUnlocked(currentLevel.slug, currentLesson.slug, levels, completedLessons);
  if (!lessonUnlocked && !completedLessons.includes(currentLesson.slug)) { // Allow access if already completed, even if now "locked" by prior lesson changes
     // Redirect to lesson details page if quiz is for a locked lesson
     return <Navigate to={ROUTES.LESSON_DETAILS.replace(':levelSlug', currentLevel.slug).replace(':lessonSlug', currentLesson.slug)} replace />;
  }
  if (quizQuestions.length === 0) {
    // No quiz for this lesson, redirect back to lesson details
    return <Navigate to={ROUTES.LESSON_DETAILS.replace(':levelSlug', currentLevel.slug).replace(':lessonSlug', currentLesson.slug)} replace />;
  }


  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    let currentScore = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setShowResults(true);
    
    const percentage = (currentScore / quizQuestions.length) * 100;
    if (percentage >= 70) {
      onQuizComplete(currentLesson.slug);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleSubmitQuiz();
    }
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const lessonPath = ROUTES.LESSON_DETAILS.replace(':levelSlug', currentLevel.slug).replace(':lessonSlug', currentLesson.slug);

  const breadcrumbItems = [
    { label: 'الرئيسية', path: ROUTES.HOME },
    { label: 'الدروس', path: ROUTES.CURRICULUM },
    { label: currentLevel.title, path: ROUTES.LEVEL_DETAILS.replace(':levelSlug', currentLevel.slug) },
    { label: currentLesson.title, path: lessonPath },
    { label: 'الاختبار' },
  ];
  
  const nextLevelSlug = levels[levels.findIndex(l => l.slug === currentLevel.slug) + 1]?.slug;
  const nextLessonSlug = currentLevel.lessons[currentLevel.lessons.findIndex(l => l.slug === currentLesson.slug) + 1]?.slug;


  if (showResults) {
    const percentage = (score / quizQuestions.length) * 100;
    const passed = percentage >= 70;

    return (
      <div className="max-w-2xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="text-center bg-slate-800/80 p-6 sm:p-10 rounded-xl shadow-2xl border border-slate-700/80 backdrop-blur-sm">
          <h1 className="text-3xl sm:text-4xl font-bold text-sky-400 mb-6">نتائج الاختبار</h1>
          <div className={`p-6 sm:p-8 rounded-lg shadow-xl mb-8 border ${passed ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50'}`}>
              <p className="text-5xl sm:text-6xl font-bold mb-2 text-gray-100">
                  {score} <span className="text-3xl sm:text-4xl text-gray-400">/ {quizQuestions.length}</span>
              </p>
              <p className={`text-xl sm:text-2xl font-semibold ${passed ? 'text-green-300' : 'text-red-300'}`}>
                  ({percentage.toFixed(0)}%) {passed ? 'رائع! لقد اجتزت الاختبار بنجاح.' : 'للأسف، لم تجتز الاختبار هذه المرة.'}
              </p>
              {passed && <p className="mt-2.5 text-base text-green-400/90">استمر في التقدم، أنت على الطريق الصحيح!</p>}
              {!passed && <p className="mt-2.5 text-base text-red-400/90">لا تيأس! راجع الدرس وحاول مرة أخرى. يمكنك فعلها!</p>}
          </div>

          <div className="my-8 space-y-4 text-right rtl:text-right">
            {quizQuestions.map((q, idx) => (
              <div key={q.id} className={`p-4 rounded-lg border ${selectedAnswers[q.id] === q.correctAnswerIndex ? 'bg-green-600/20 border-green-600/40' : 'bg-red-600/20 border-red-600/40'}`}>
                <p className="font-semibold text-lg text-gray-100">{idx + 1}. {q.text}</p>
                <div className="flex items-center mt-2">
                  {selectedAnswers[q.id] === q.correctAnswerIndex ? 
                      <CheckCircleIcon className="w-5 h-5 text-green-400 ml-2 rtl:mr-2 rtl:ml-0 flex-shrink-0"/> : 
                      <XCircleIcon className="w-5 h-5 text-red-400 ml-2 rtl:mr-2 rtl:ml-0 flex-shrink-0"/>
                  }
                  <p className="text-sm text-gray-300">إجابتك: <span className="font-medium">{q.options[selectedAnswers[q.id]] ?? 'لم تجب'}</span></p>
                </div>
                {selectedAnswers[q.id] !== q.correctAnswerIndex && (
                  <p className={`text-sm font-bold text-green-300/90 mt-1.5`}>
                    الإجابة الصحيحة: {q.options[q.correctAnswerIndex]}
                  </p>
                )}
                {q.explanation && <p className="text-xs text-gray-400 mt-2.5 bg-slate-700/60 p-2 rounded-md">{q.explanation}</p>}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse">
            <button
              onClick={handleRestartQuiz}
              className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-150 ease-in-out transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              إعادة الاختبار
            </button>
            <Link
              to={lessonPath}
              className="w-full sm:w-auto bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-150 ease-in-out transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              العودة للدرس
            </Link>
            {passed && nextLessonSlug && (
               <Link
                to={ROUTES.LESSON_DETAILS.replace(':levelSlug', currentLevel.slug).replace(':lessonSlug', nextLessonSlug)}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-150 ease-in-out transform hover:scale-105 shadow-md"
               >
                الدرس التالي
               </Link>
            )}
             {passed && !nextLessonSlug && nextLevelSlug && (
                <Link
                  to={ROUTES.LEVEL_DETAILS.replace(':levelSlug', nextLevelSlug)}
                  className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-150 ease-in-out transform hover:scale-105 shadow-md"
                >
                  المستوى التالي
                </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="bg-slate-800/80 p-6 sm:p-8 rounded-xl shadow-2xl border border-slate-700/80 backdrop-blur-sm">
        <h1 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-2 text-center">اختبار درس: {currentLesson.title}</h1>
        <p className="text-center text-gray-400 mb-8">السؤال {currentQuestionIndex + 1} من {quizQuestions.length}</p>
      
        <div>
          <p className="text-xl font-semibold text-gray-100 mb-6 min-h-[60px] text-right rtl:text-right">{currentQuestion.text}</p>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                className={`w-full text-right rtl:text-right p-4 rounded-lg border-2 transition-all duration-200 ease-in-out transform hover:scale-[1.02]
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800
                  ${selectedAnswers[currentQuestion.id] === index 
                    ? 'bg-sky-500 border-sky-400 text-white ring-sky-300 shadow-lg' 
                    : 'bg-slate-700/70 border-slate-600/80 hover:bg-slate-600/80 hover:border-sky-500/70 text-gray-200 focus:ring-sky-500/80 focus:border-sky-500/80'}`}
                aria-pressed={selectedAnswers[currentQuestion.id] === index}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswers[currentQuestion.id] === undefined}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-10 rounded-lg text-lg 
                         transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl
                         disabled:bg-gray-500/70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none 
                         focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              {currentQuestionIndex < quizQuestions.length - 1 ? 'السؤال التالي' : 'إنهاء وعرض النتيجة'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;