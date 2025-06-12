import { Level, Lesson } from '../types';
import { levelsData } from '../data/lessonsData'; // Import levelsData to access all lessons

const COMPLETED_LESSONS_STORAGE_KEY = 'bodCodeCompletedLessons';

/**
 * Retrieves the list of completed lesson slugs from localStorage.
 * @returns {string[]} An array of completed lesson slugs.
 */
export const getCompletedLessons = (): string[] => {
  const storedData = localStorage.getItem(COMPLETED_LESSONS_STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : [];
};

/**
 * Marks a lesson as completed by adding its slug to localStorage.
 * @param {string} lessonSlug - The slug of the lesson to mark as completed.
 */
export const markLessonAsCompleted = (lessonSlug: string): void => {
  const completed = getCompletedLessons();
  if (!completed.includes(lessonSlug)) {
    completed.push(lessonSlug);
    localStorage.setItem(COMPLETED_LESSONS_STORAGE_KEY, JSON.stringify(completed));
  }
};

/**
 * Checks if a specific lesson slug is in the completed list.
 * @param {string} lessonSlug - The slug of the lesson to check.
 * @param {string[]} completedLessons - An array of completed lesson slugs.
 * @returns {boolean} True if the lesson is completed, false otherwise.
 */
export const isLessonCompleted = (lessonSlug: string, completedLessons: string[]): boolean => {
  return completedLessons.includes(lessonSlug);
};


/**
 * Determines if a specific lesson should be accessible based on completion progress.
 * @param {string} targetLevelSlug - The slug of the level the target lesson belongs to.
 * @param {string} targetLessonSlug - The slug of the lesson to check.
 * @param {Level[]} allLevelsData - All available levels and their lessons.
 * @param {string[]} completedLessonsSlugs - An array of completed lesson slugs.
 * @returns {boolean} True if the lesson is unlocked, false otherwise.
 */
export const isLessonUnlocked = (
  targetLevelSlug: string,
  targetLessonSlug: string,
  allLevelsData: Level[],
  completedLessonsSlugs: string[]
): boolean => {
  const targetLevelIndex = allLevelsData.findIndex(level => level.slug === targetLevelSlug);
  if (targetLevelIndex === -1) return false; // Level not found

  const targetLevel = allLevelsData[targetLevelIndex];
  const targetLessonIndex = targetLevel.lessons.findIndex(lesson => lesson.slug === targetLessonSlug);
  if (targetLessonIndex === -1) return false; // Lesson not found

  // First lesson of the first level is always unlocked
  if (targetLevelIndex === 0 && targetLessonIndex === 0) {
    return true;
  }

  // If it's the first lesson of a level (but not the very first level)
  if (targetLessonIndex === 0 && targetLevelIndex > 0) {
    const previousLevel = allLevelsData[targetLevelIndex - 1];
    // All lessons in the previous level must be completed
    return previousLevel.lessons.every(lesson => completedLessonsSlugs.includes(lesson.slug));
  }

  // For subsequent lessons in the same level
  if (targetLessonIndex > 0) {
    const previousLesson = targetLevel.lessons[targetLessonIndex - 1];
    return completedLessonsSlugs.includes(previousLesson.slug);
  }

  return false; // Should not happen if logic is correct
};
