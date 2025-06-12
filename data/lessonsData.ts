

import { Level, LearningStep } from '../types';
import PythonIcon from '../components/icons/PythonIcon';
import React from 'react';

// Import lessons for each level
import { beginnerLessons } from './levels/beginner';
import { intermediateLessons } from './levels/intermediate';
import { advancedLessons } from './levels/advanced'; 

export const learningPlanData: LearningStep[] = [
  {
    id: 'plan-intro',
    title: 'مقدمة عن بايثون وعالم البرمجة',
    description: 'ابدأ رحلتك بفهم أساسيات البرمجة ولماذا بايثون هي اختيار رائع.',
    subSteps: [
      { id: 'plan-intro-1', title: 'ما هي البرمجة؟', description: 'مفهوم البرمجة وتطبيقاتها.', relatedLevelSlug: 'beginner', relatedLessonSlug: 'what-is-programming' },
      { id: 'plan-intro-2', title: 'لماذا نتعلم بايثون؟', description: 'مميزات لغة بايثون وسهولة تعلمها.', relatedLevelSlug: 'beginner', relatedLessonSlug: 'introduction-to-python' },
    ],
  },
  {
    id: 'plan-basics',
    title: 'أساسيات بايثون',
    description: 'تعلم اللبنات الأساسية في بايثون: المتغيرات، أنواع البيانات، والعمليات.',
    subSteps: [
      { id: 'plan-basics-1', title: 'تثبيت بايثون وإعداد بيئة العمل', description: 'خطوات عملية لتجهيز جهازك.', relatedLevelSlug: 'beginner', relatedLessonSlug: 'setting-up-python' },
      { id: 'plan-basics-2', title: 'أول برنامج لك: "أهلاً بالعالم!"', description: 'كتابة وتشغيل أول كود بايثون.', relatedLevelSlug: 'beginner', relatedLessonSlug: 'hello-world' },
      { id: 'plan-basics-3', title: 'المتغيرات وأنواع البيانات', description: 'فهم كيفية تخزين واستخدام البيانات.', relatedLevelSlug: 'beginner', relatedLessonSlug: 'variables-and-data-types' },
      { id: 'plan-basics-4', title: 'العمليات في بايثون', description: 'إجراء العمليات الحسابية والمنطقية والمقارنات.', relatedLevelSlug: 'beginner', relatedLessonSlug: 'operators-in-python'},
    ],
  },
  {
    id: 'plan-control',
    title: 'التحكم في سير البرنامج',
    description: 'الشروط، الحلقات، وكيفية اتخاذ القرارات في الكود.',
    subSteps: [
      { id: 'plan-control-1', title: 'الجمل الشرطية (if, elif, else)', description: 'جعل البرنامج يتخذ قرارات.', relatedLevelSlug: 'beginner', relatedLessonSlug: 'conditional-statements' },
      { id: 'plan-control-2', title: 'حلقات التكرار (for, while)', description: 'تنفيذ الأوامر بشكل متكرر.', relatedLevelSlug: 'beginner', relatedLessonSlug: 'loops-in-python' },
    ],
  },
  {
    id: 'plan-functions',
    title: 'الدوال (Functions)',
    description: 'تنظيم الكود وإعادة استخدامه بكفاءة.',
    subSteps: [
      { id: 'plan-functions-1', title: 'تعريف واستدعاء الدوال', description: 'إنشاء بلوكات كود قابلة لإعادة الاستخدام.', relatedLevelSlug: 'beginner', relatedLessonSlug: 'functions-in-python' },
      { id: 'plan-functions-2', title: 'معاملات الدوال والقيم المُرجعة', description: 'تمرير البيانات للدوال والحصول على نتائج (يتم تغطيته في درس الدوال).', relatedLevelSlug: 'beginner', relatedLessonSlug: 'functions-in-python' }, // Keep related slugs for navigation logic
    ],
  },
  {
    id: 'plan-intermediate',
    title: 'مستوى متوسط: هياكل البيانات ومفاهيم متقدمة',
    description: 'الغوص أعمق في مفاهيم متقدمة لتصبح مبرمج بايثون محترف.',
    subSteps: [
      { id: 'plan-intermediate-1', title: 'هياكل البيانات (القوائم، الصفوف، القواميس، المجموعات)', description: 'طرق متقدمة لتنظيم البيانات.', relatedLevelSlug: 'intermediate', relatedLessonSlug: 'data-structures' },
      { id: 'plan-intermediate-2', title: 'مقدمة في البرمجة الشيئية (OOP)', description: 'فهم الكائنات والأصناف.', relatedLevelSlug: 'intermediate', relatedLessonSlug: 'object-oriented-programming' },
      { id: 'plan-intermediate-3', title: 'فهم List Comprehensions', description: 'طريقة مختصرة وفعالة لإنشاء القوائم.', relatedLevelSlug: 'intermediate', relatedLessonSlug: 'list-comprehensions' },
    ],
  },
  { 
    id: 'plan-advanced-concepts',
    title: 'مفاهيم بايثون الاحترافية وبناء التطبيقات', 
    description: 'اكتشف مفاهيم متقدمة وأدوات لبناء تطبيقات بايثون قوية ومتكاملة.', 
    subSteps: [
      { id: 'plan-adv-1', title: 'المُزخرفات (Decorators)', description: 'تغليف الدوال بوظائف إضافية بأناقة.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'decorators' },
      { id: 'plan-adv-2', title: 'المُولدات والمُكررات (Generators & Iterators)', description: 'معالجة البيانات بكفاءة في استخدام الذاكرة.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'generators-iterators' },
      { id: 'plan-adv-3', title: 'البرمجة الشيئية المتقدمة', description: 'الوراثة وتعدد الأوجه.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'advanced-oop' },
      { id: 'plan-adv-4', title: 'مديرو السياق (Context Managers)', description: 'إدارة الموارد بأمان مع جملة `with`.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'context-managers' },
      { id: 'plan-adv-5', title: 'التعبيرات النمطية (Regex)', description: 'البحث المتقدم في النصوص ومعالجتها.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'regular-expressions' },
      { id: 'plan-adv-6', title: 'التعامل مع واجهات برمجة التطبيقات (APIs)', description: 'جلب البيانات من خدمات الويب.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'working-with-apis' },
      { id: 'plan-adv-7', title: 'أساسيات قواعد البيانات (SQLite)', description: 'تخزين واسترجاع البيانات بشكل دائم.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'basic-database-interaction' },
      { id: 'plan-adv-8', title: 'مقدمة في اختبار البرمجيات', description: 'ضمان جودة تطبيقاتك بكتابة الاختبارات.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'introduction-to-testing' },
      { id: 'plan-adv-9', title: 'البرمجة غير المتزامنة (asyncio)', description: 'بناء تطبيقات عالية الأداء للعمليات التي تتضمن انتظارًا.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'async-programming-intro' },
      { id: 'plan-adv-10', title: 'هيكلة المشاريع والتغليف', description: 'تنظيم المشاريع الكبيرة وتوزيع التطبيقات.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'project-structuring-packaging' },
      { id: 'plan-adv-11', title: 'تسجيل الأخطاء والمراقبة', description: 'متابعة أداء التطبيق وتشخيص المشاكل.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'error-logging-monitoring' },
      { id: 'plan-adv-12', title: 'مقدمة في برمجة الواجهات الرسومية (GUI)', description: 'بناء تطبيقات سطح مكتب بسيطة مع Tkinter.', relatedLevelSlug: 'advanced', relatedLessonSlug: 'gui-programming-tkinter-intro' },
    ]
  }
];


export const levelsData: Level[] = [
  {
    id: 'level-1',
    slug: 'beginner',
    title: 'مستوى المبتدئين',
    description: 'ابدأ رحلتك في عالم بايثون مع الأساسيات والمفاهيم الأولية.',
    icon: React.createElement(PythonIcon, { className: 'w-12 h-12 text-sky-400' }),
    lessons: beginnerLessons,
  },
  {
    id: 'level-2',
    slug: 'intermediate',
    title: 'مستوى متوسط',
    description: 'تعمق أكثر في بايثون مع هياكل البيانات، البرمجة الشيئية، ومفاهيم متقدمة أخرى.',
    icon: React.createElement(PythonIcon, { className: 'w-12 h-12 text-teal-400' }),
    lessons: intermediateLessons,
  },
  { 
    id: 'level-3',
    slug: 'advanced',
    title: 'المستوى المتقدم وتطبيقات عملية', 
    description: 'اكتشف مفاهيم بايثون متقدمة وتعلم كيفية بناء تطبيقات أكثر قوة وكفاءة.', 
    icon: React.createElement(PythonIcon, { className: 'w-12 h-12 text-purple-400' }), 
    lessons: advancedLessons,
  }
];