import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, ROUTES } from '../constants';
import PythonIcon from '../components/icons/PythonIcon';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import CodeIcon from '../components/icons/CodeIcon'; // For Code Playground feature
import { beginnerLessons } from '../data/levels/beginner'; // For featured lessons
import LanguageIcon from '../components/icons/LanguageIcon';
import SparklesIcon from '../components/icons/SparklesIcon';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import UsersIcon from '../components/icons/UsersIcon';
import NewspaperIcon from '../components/icons/NewspaperIcon';


// Academic Cap Icon (retained from previous)
const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10.5 2a.5.5 0 00-1 0v1.336a3.002 3.002 0 00-2.14 1.018l-.002.002-.002.002A3.002 3.002 0 004 6.85V10a2 2 0 002 2h8a2 2 0 002-2V6.85a3.002 3.002 0 00-2.356-2.494l-.002-.002-.002-.002A3.002 3.002 0 0010.5 3.336V2zM4.432 4.908A4.5 4.5 0 0110 3.5c1.912 0 3.599.941 4.568 2.408L10 8.216 4.432 4.908zM15 10.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V8.21a.5.5 0 01.276-.447l4.5-2.25a.5.5 0 01.448 0l4.5 2.25a.5.5 0 01.276.447v2.29zM13 13.5a1 1 0 100-2H7a1 1 0 100 2h6z"/>
  </svg>
);

// Collection Icon (retained from previous)
const CollectionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm3 4a1 1 0 011-1h8a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const encouragingPhrases: string[] = [
  `ابدأ رحلتك في عالم الأكواد مع ${APP_NAME}!`,
  "كل سطر كود تكتبه هو خطوة نحو الإبداع.",
  "لا تخف من الأخطاء، فهي جزء أساسي من التعلم.",
  "بايثون هي بوابتك لعالم مليء بالاحتمالات اللانهائية.",
  `${APP_NAME}، البرمجة أصبحت أسهل وأكثر متعة.`,
  "استمر في التعلم، استمر في النمو، استمر في الإبداع.",
  "العالم يحتاج إلى مبرمجين مثلك!",
  "حول أفكارك إلى واقع ملموس مع قوة البرمجة.",
  "الكود هو لغة المستقبل، ابدأ في تعلمها اليوم.",
  `${APP_NAME}: طريقك المختصر لاحتراف بايثون باللغة العربية.`,
];

const TYPING_SPEED_NORMAL = 70;
const DELETING_SPEED_NORMAL = 40;
const PAUSE_DURATION_NORMAL = 2000;
const INTER_ITEM_DELAY_NORMAL = 300;

// Data for new sections
const whyUsFeatures = [
  { id: 'wf1', icon: LanguageIcon, title: 'تعلم بالعربية المصرية', description: `محتوى مُعد خصيصًا باللهجة المصرية لتسهيل الفهم والاستيعاب لمتحدثي العربية كلغة أم. وداعاً لعناء ترجمة المصطلحات!` },
  { id: 'wf2', icon: SparklesIcon, title: 'دروس تفاعلية واختبارات', description: 'دروس مشروحة بطريقة مبسطة مع اختبارات تفاعلية بعد كل درس لقياس مدى فهمك وتثبيت المعلومة. تعلم بالممارسة!' },
  { id: 'wf3', icon: CodeIcon, title: 'ساحة أكواد متكاملة', description: 'جرب كتابة أكواد بايثون مباشرة في متصفحك وشاهد النتائج الفورية مع شرح من الذكاء الاصطناعي. لا حاجة لتثبيت أي برامج.' },
  { id: 'wf4', icon: AcademicCapIcon, title: 'خطة تعلم منظمة', description: 'منهج تعليمي متدرج يأخذك من مستوى المبتدئين خطوة بخطوة حتى تصل إلى مفاهيم متقدمة. تقدم بثقة في رحلتك البرمجية.' },
];

const featuredLessonsData = beginnerLessons.slice(0, 3).map(lesson => ({
  id: lesson.id,
  slug: lesson.slug,
  levelSlug: 'beginner',
  icon: BookOpenIcon,
  title: lesson.title,
  description: lesson.description.substring(0, 100) + "..." // Shorten description
}));

const testimonialsData = [
  { id: 't1', name: 'أحمد خالد', avatarText: 'أخ', quote: `"${APP_NAME} ساعدني أفهم بايثون بسهولة وبطريقة ممتعة جداً. الشرح باللهجة المصرية كان ممتاز!"` },
  { id: 't2', name: 'سارة علي', avatarText: 'سع', quote: `"أخيراً لقيت مكان أتعلم فيه برمجة بالعربي وبأسلوب مبسط. ساحة الأكواد فكرة عبقرية!"` },
  { id: 't3', name: 'محمد فتحي', avatarText: 'مف', quote: `"خطة التعلم والاختبارات ساعدتني أتابع تقدمي وأعرف نقاط ضعفي. شكراً ${APP_NAME}."` },
];

const newsData = [
  { id: 'n1', icon: SparklesIcon, title: 'إطلاق المستوى المتقدم الجديد!', description: `يسرنا الإعلان عن إضافة دروس المستوى المتقدم لتغطية مفاهيم احترافية في بايثون. اكتشفها الآن!` },
  { id: 'n2', icon: UsersIcon, title: 'انضم إلى مجتمعنا على Discord', description: `تم إطلاق سيرفر Discord الخاص بـ ${APP_NAME} للتواصل مع المتعلمين الآخرين وطرح الأسئلة. انضم إلينا!` },
  { id: 'n3', icon: CodeIcon, title: 'تحديثات جديدة في ساحة الأكواد', description: `تم تحسين أداء ساحة الأكواد وإضافة دعم لمزيد من المكتبات. جربها اليوم واكتشف الجديد!` },
];

// Generic hook for typing animation for card descriptions
const useTypingAnimation = (items: any[], propertyToType: string, speed = 50, pause = 200000, interDelay = 100) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedTexts, setTypedTexts] = useState<Record<string, string>>({});
  const [isTypingPaused, setIsTypingPaused] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!items.length || items.length === 0) return;

    const currentItem = items[currentIndex];
    if (!currentItem || !currentItem.id) return;

    const fullText = currentItem[propertyToType] || '';
    const currentTypedText = typedTexts[currentItem.id] || '';

    if (isTypingPaused[currentItem.id] || currentTypedText.length === fullText.length) {
      if (currentTypedText.length === fullText.length && !isTypingPaused[currentItem.id]) {
          setTypedTexts(prev => ({ ...prev, [currentItem.id]: fullText }));
           setIsTypingPaused(prev => ({ ...prev, [currentItem.id]: true })); // Pause after finishing
      }
      // Move to next item if current one is fully typed and paused
      if (isTypingPaused[currentItem.id] && currentIndex < items.length - 1) {
        const timer = setTimeout(() => {
            setCurrentIndex(prev => prev + 1);
        }, interDelay);
        return () => clearTimeout(timer);
      }
      return; 
    }
    
    const timer = setTimeout(() => {
      setTypedTexts(prev => ({
        ...prev,
        [currentItem.id]: fullText.substring(0, (prev[currentItem.id]?.length || 0) + 1)
      }));
    }, speed);

    return () => clearTimeout(timer);
  }, [typedTexts, currentIndex, items, propertyToType, speed, pause, interDelay, isTypingPaused]);

  return { typedTexts, currentItemId: items[currentIndex]?.id };
};


const HomePage: React.FC = () => {
  const ctaButtonBaseClasses = "w-full sm:w-auto font-bold py-3.5 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center space-x-3 rtl:space-x-reverse";

  // State for top encouraging phrases
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typedPhrase, setTypedPhrase] = useState('');
  const [isDeletingPhrase, setIsDeletingPhrase] = useState(false);
  
  // Effect for top encouraging phrases
  useEffect(() => {
    let timer: number; // Changed NodeJS.Timeout to number
    const currentFullPhrase = encouragingPhrases[currentPhraseIndex];

    if (isDeletingPhrase) {
      if (typedPhrase.length > 0) {
        timer = window.setTimeout(() => { // Used window.setTimeout for clarity
          setTypedPhrase(currentFullPhrase.substring(0, typedPhrase.length - 1));
        }, DELETING_SPEED_NORMAL);
      } else {
        setIsDeletingPhrase(false);
        timer = window.setTimeout(() => { // Used window.setTimeout
           setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % encouragingPhrases.length);
        }, INTER_ITEM_DELAY_NORMAL);
      }
    } else { 
      if (typedPhrase.length < currentFullPhrase.length) {
        timer = window.setTimeout(() => { // Used window.setTimeout
          setTypedPhrase(currentFullPhrase.substring(0, typedPhrase.length + 1));
        }, TYPING_SPEED_NORMAL);
      } else { 
        timer = window.setTimeout(() => { // Used window.setTimeout
          setIsDeletingPhrase(true);
        }, PAUSE_DURATION_NORMAL);
      }
    }
    return () => window.clearTimeout(timer); // Used window.clearTimeout
  }, [typedPhrase, isDeletingPhrase, currentPhraseIndex]);

  // Typing animations for new sections
  const { typedTexts: typedWhyUs, currentItemId: currentWhyUsId } = useTypingAnimation(whyUsFeatures, 'description');
  const { typedTexts: typedFeaturedLessons, currentItemId: currentFeaturedLessonId } = useTypingAnimation(featuredLessonsData, 'description');
  const { typedTexts: typedTestimonials, currentItemId: currentTestimonialId } = useTypingAnimation(testimonialsData, 'quote');
  const { typedTexts: typedNews, currentItemId: currentNewsId } = useTypingAnimation(newsData, 'description');

  const SectionTitle: React.FC<{ title: string, icon?: React.FC<{className?: string}> }> = ({ title, icon: IconComponent }) => (
    <div className="flex items-center justify-center mb-8 sm:mb-10">
      {IconComponent && <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-sky-400 mr-3 rtl:ml-3 rtl:mr-0" />}
      <h2 className="text-3xl sm:text-4xl font-bold text-sky-400 text-center">{title}</h2>
    </div>
  );


  return (
    <div className="text-center py-12 sm:py-16">
      {/* Hero Section */}
      <div className="animate-fadeInUpSlight mb-16 sm:mb-20">
        <PythonIcon className="w-28 h-28 sm:w-32 sm:h-32 text-sky-400 mx-auto mb-6 transition-all duration-500 ease-in-out hover:animate-pulse hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">
          أهلاً بك في {APP_NAME}!
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
          منصتك الشاملة والمبسطة لتعلم لغة بايثون باللهجة المصرية، من الصفر وحتى الاحتراف، مع تطبيقات عملية ومشاريع ممتعة.
        </p>
      </div>

      {/* Encouraging Text Section */}
      <div className="min-h-[60px] sm:min-h-[70px] mb-10 sm:mb-12 flex items-center justify-center animate-fadeInUpSlight animation-delay-200">
        <p className="text-xl sm:text-2xl text-teal-300 font-mono tracking-wide">
          <span className="inline-block min-h-[1.5em]">{typedPhrase}</span>
          {(typedPhrase !== encouragingPhrases[currentPhraseIndex] && !isDeletingPhrase) || (isDeletingPhrase && typedPhrase.length > 0) ? <span className="blinking-cursor"></span> : <span className="blinking-cursor opacity-0"></span>}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse flex flex-col sm:flex-row justify-center items-center animate-fadeInUpSlight animation-delay-400 mb-20 sm:mb-24">
        <Link
          to={ROUTES.LEARNING_PLAN}
          className={`${ctaButtonBaseClasses} bg-sky-500 hover:bg-sky-400 text-white focus:ring-sky-400`}
        >
          <AcademicCapIcon className="w-6 h-6" />
          <span>ابدأ خطة التعلم</span>
        </Link>
        <Link
          to={ROUTES.CURRICULUM}
          className={`${ctaButtonBaseClasses} bg-slate-700 hover:bg-slate-600 text-gray-100 focus:ring-slate-500`}
        >
          <CollectionIcon className="w-6 h-6" />
          <span>تصفح كل الدروس</span>
        </Link>
      </div>

      {/* Why Choose Bod Code Section */}
      <section className="py-12 sm:py-16 bg-slate-800/30 rounded-xl shadow-xl mb-16 sm:mb-20 animate-fadeInUpSlight animation-delay-600" aria-labelledby="why-choose-us-title">
        <SectionTitle title={`لماذا تختار ${APP_NAME}؟`} icon={CheckCircleIcon} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-8">
          {whyUsFeatures.map(feature => (
            <div key={feature.id} className="bg-slate-700/60 p-6 rounded-lg shadow-lg border border-slate-600/70 transition-all duration-300 hover:shadow-sky-500/20 hover:border-sky-500/50 hover:-translate-y-1">
              <feature.icon className="w-10 h-10 text-sky-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-sky-300 mb-2 text-center">{feature.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed min-h-[4.5em]">
                {typedWhyUs[feature.id] || ''}
                {feature.id === currentWhyUsId && (typedWhyUs[feature.id]?.length || 0) < feature.description.length && <span className="blinking-cursor"></span>}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Lessons Section */}
      <section className="py-12 sm:py-16 mb-16 sm:mb-20 animate-fadeInUpSlight animation-delay-800" aria-labelledby="featured-lessons-title">
        <SectionTitle title="ابدأ رحلتك من هنا" icon={BookOpenIcon} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8">
          {featuredLessonsData.map(lesson => (
            <div key={lesson.id} className="bg-slate-800/70 p-6 rounded-xl shadow-lg border border-slate-700/80 transition-all duration-300 hover:shadow-teal-500/20 hover:border-teal-500/60 hover:scale-105 flex flex-col">
              <lesson.icon className="w-10 h-10 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-teal-300 mb-2 text-center flex-grow">{lesson.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4 min-h-[4em] flex-grow">
                {typedFeaturedLessons[lesson.id] || ''}
                {lesson.id === currentFeaturedLessonId && (typedFeaturedLessons[lesson.id]?.length || 0) < lesson.description.length && <span className="blinking-cursor"></span>}
              </p>
              <Link
                to={ROUTES.LESSON_DETAILS.replace(':levelSlug', lesson.levelSlug).replace(':lessonSlug', lesson.slug)}
                className="mt-auto w-full bg-teal-500 hover:bg-teal-400 text-white font-medium py-2.5 px-4 rounded-md text-sm transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                ابدأ الدرس
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-slate-800/30 rounded-xl shadow-xl mb-16 sm:mb-20 animate-fadeInUpSlight animation-delay-1000" aria-labelledby="testimonials-title">
        <SectionTitle title="ماذا يقول طلابنا؟" icon={UsersIcon} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="bg-slate-700/60 p-6 rounded-lg shadow-lg border border-slate-600/70 text-center">
              <div className="w-16 h-16 rounded-full bg-sky-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-md">{testimonial.avatarText}</div>
              <p className="text-md text-gray-300 italic mb-3 min-h-[5em]">
                {typedTestimonials[testimonial.id] || ''}
                {testimonial.id === currentTestimonialId && (typedTestimonials[testimonial.id]?.length || 0) < testimonial.quote.length && <span className="blinking-cursor"></span>}
              </p>
              <p className="text-sm font-semibold text-sky-400">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 sm:py-16 animate-fadeInUpSlight animation-delay-1200" aria-labelledby="news-title">
        <SectionTitle title="آخر الأخبار والتحديثات" icon={NewspaperIcon} />
        <div className="space-y-6 px-4 sm:px-8 max-w-3xl mx-auto">
          {newsData.map(newsItem => (
            <div key={newsItem.id} className="bg-slate-800/70 p-5 rounded-lg shadow-lg border border-slate-700/80 flex items-start space-x-4 rtl:space-x-reverse hover:bg-slate-700/80 transition-colors duration-200">
              <newsItem.icon className="w-8 h-8 text-teal-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-teal-300 mb-1">{newsItem.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed min-h-[2.5em]">
                  {typedNews[newsItem.id] || ''}
                  {newsItem.id === currentNewsId && (typedNews[newsItem.id]?.length || 0) < newsItem.description.length && <span className="blinking-cursor"></span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;