import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearningPlanPage from './pages/LearningPlanPage';
import CurriculumPage from './pages/CurriculumPage';
import LevelDetailsPage from './pages/LevelDetailsPage';
import LessonDetailsPage from './pages/LessonDetailsPage';
import QuizPage from './pages/QuizPage';
import ChatPage from './pages/ChatPage';
import PlaygroundPage from './pages/PlaygroundPage';
import { levelsData, learningPlanData } from './data/lessonsData';
import ErrorBoundary from './components/ErrorBoundary';
import SplashScreen from './components/SplashScreen';
import { getCompletedLessons, markLessonAsCompleted as markLessonCompletedUtil } from './utils/lessonProgress';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    setCompletedLessons(getCompletedLessons());
  }, []);

  const handleSplashFinished = () => {
    setShowSplash(false);
  };

  const handleLessonCompleted = (lessonSlug: string) => {
    markLessonCompletedUtil(lessonSlug);
    setCompletedLessons(prevCompleted => {
      if (!prevCompleted.includes(lessonSlug)) {
        return [...prevCompleted, lessonSlug];
      }
      return prevCompleted;
    });
  };

  if (showSplash) {
    return <SplashScreen onFinished={handleSplashFinished} />;
  }

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen text-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <ErrorBoundary>
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route 
                path={ROUTES.LEARNING_PLAN} 
                element={<LearningPlanPage learningPlan={learningPlanData} levels={levelsData} completedLessons={completedLessons} />} 
              />
              <Route path={ROUTES.CURRICULUM} element={<CurriculumPage levels={levelsData} />} />
              <Route 
                path={ROUTES.LEVEL_DETAILS} 
                element={<LevelDetailsPage levels={levelsData} completedLessons={completedLessons} />} 
              />
              <Route 
                path={ROUTES.LESSON_DETAILS} 
                element={<LessonDetailsPage levels={levelsData} completedLessons={completedLessons} />} 
              />
              <Route 
                path={ROUTES.LESSON_QUIZ} 
                element={<QuizPage levels={levelsData} onQuizComplete={handleLessonCompleted} completedLessons={completedLessons} />} 
              />
              <Route path={ROUTES.CHAT_AI} element={<ChatPage />} />
              <Route path={ROUTES.PLAYGROUND} element={<PlaygroundPage />} />
              <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;