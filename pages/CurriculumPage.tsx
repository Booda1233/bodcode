import React from 'react';
import { Link } from 'react-router-dom';
import { Level } from '../types';
import { ROUTES } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';

interface CurriculumPageProps {
  levels: Level[];
}

const CurriculumPage: React.FC<CurriculumPageProps> = ({ levels }) => {
  const breadcrumbItems = [
    { label: 'الرئيسية', path: ROUTES.HOME },
    { label: 'الدروس' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold text-sky-400 mb-8 text-center">مناهج تعلم بايثون</h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl mx-auto">
        اختر المستوى الذي يناسبك وابدأ رحلتك في تعلم بايثون. كل مستوى يحتوي على مجموعة من الدروس والاختبارات المصممة بعناية.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {levels.map((level) => (
          <Link
            key={level.id}
            to={ROUTES.LEVEL_DETAILS.replace(':levelSlug', level.slug)}
            className="block p-6 bg-slate-800/80 rounded-xl shadow-lg hover:shadow-xl hover:shadow-sky-500/20 hover:bg-slate-700/90 
                       transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 
                       border border-slate-700/80 hover:border-sky-500/70 
                       focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <div className="flex items-center justify-center mb-5 h-16">
              {level.icon ? React.cloneElement(level.icon as React.ReactElement<{ className?: string }>, { className: 'w-16 h-16 transition-transform duration-300 group-hover:scale-110' }) : 
                           <div className="w-16 h-16 bg-sky-500/30 rounded-full flex items-center justify-center text-sky-400 text-3xl">?</div>}
            </div>
            <h2 className="text-2xl font-semibold text-sky-400 mb-3 text-center group-hover:text-sky-300 transition-colors duration-300">{level.title}</h2>
            <p className="text-gray-400 text-center text-sm leading-relaxed">{level.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CurriculumPage;