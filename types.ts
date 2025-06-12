import React from 'react';

export interface Question {
  id: string;
  text: string; // Question text in Egyptian Arabic
  options: string[]; // Answer options in Egyptian Arabic
  correctAnswerIndex: number;
  explanation?: string; // Explanation in Egyptian Arabic
}

export interface LessonContentPart {
  type: 'paragraph' | 'code' | 'heading' | 'subheading' | 'list';
  text: string; // Content in Egyptian Arabic (for list, can be a title for the list)
  language?: 'python' | 'text'; // For code blocks
  items?: string[]; // For list type
}

export interface Lesson {
  id: string;
  slug: string;
  title: string; // Lesson title in Egyptian Arabic
  description: string; // Short description in Egyptian Arabic
  content: LessonContentPart[];
  quiz: Question[];
}

export interface Level {
  id: string;
  slug: string;
  title: string; // Level title in Egyptian Arabic
  description: string; // Level description in Egyptian Arabic
  lessons: Lesson[];
  icon?: React.ReactNode;
}

export interface LearningStep {
  id:string;
  title: string; // Step title in Egyptian Arabic
  description: string; // Step description in Egyptian Arabic
  // isCompleted and related Ids are removed as progress is now dynamic
  subSteps?: LearningStep[];
  relatedLessonSlug?: string; // Optional: slug of a lesson related to this step
  relatedLevelSlug?: string; // Optional: slug of the level for the related lesson
}