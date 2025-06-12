import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ROUTES } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';

const PlaygroundPage: React.FC = () => {
  const [code, setCode] = useState<string>('print("أهلاً بك في ساحة أكواد Bod Code!")\n\n# جرب كتابة أي كود بايثون هنا\n# مثال:\n# for i in range(5):\n#   print(f"الرقم هو: {i}")');
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const aiRef = useRef<GoogleGenAI | null>(null);
  const outputEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (!process.env.API_KEY) {
        setError("مفتاح API الخاص بـ Gemini غير موجود. يرجى التأكد من إعداده في متغيرات البيئة.");
        console.error("API_KEY for Gemini is missing.");
        return;
      }
      aiRef.current = new GoogleGenAI({ apiKey: process.env.API_KEY });
    } catch (e) {
      console.error("Error initializing GenAI:", e);
      setError(`فشل في تهيئة Gemini API. ${e instanceof Error ? e.message : String(e)}`);
    }
  }, []);

   useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);


  const handleRunCode = async () => {
    if (!aiRef.current) {
      setError("Gemini API غير مُهيأ. لا يمكن تشغيل الكود.");
      return;
    }
    if (!code.trim()) {
      setOutput("لا يوجد كود لتشغيله.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setOutput(''); // Clear previous output

    const prompt = `
أنت مساعد ذكاء اصطناعي متخصص في تفسير وتنفيذ أكواد بايثون.
بالنظر إلى كود بايثون التالي:
1. قم بمحاكاة تنفيذه وقدم المخرج القياسي (standard output) بالضبط كما سيظهر.
2. إذا كان هناك أي أخطاء وقت التشغيل (مثل NameError, TypeError, إلخ)، صف الخطأ وأين من المحتمل حدوثه. لا تحاول إصلاحه، فقط أبلغ عن الخطأ كما ستفعل بايثون.
3. بعد المخرج أو الخطأ، قدم شرحًا موجزًا وواضحًا لما يهدف إليه كود بايثون، أو ما يفعله حتى نقطة الخطأ.

كود بايثون:
\`\`\`python
${code}
\`\`\`

نظم ردك بوضوح، على سبيل المثال:

**المخرجات:**
\`\`\`
(مخرجات الكود هنا)
\`\`\`

**الشرح:**
(شرح الكود هنا)

في حالة حدوث خطأ:

**خطأ:**
\`\`\`
(رسالة خطأ شبيهة ببايثون وتتبع الخطأ إن أمكن)
\`\`\`

**الشرح:**
(شرح لما حدث خطأ وما كان الكود يحاول القيام به)
`;

    try {
      const response: GenerateContentResponse = await aiRef.current.models.generateContent({
        model: "gemini-2.5-flash-preview-04-17", // Ensure this is the correct and available model
        contents: prompt,
      });
      setOutput(response.text);
    } catch (e) {
      console.error("Error running code with Gemini:", e);
      const errorMessage = e instanceof Error ? e.message : String(e);
      setError(`حدث خطأ أثناء تشغيل الكود مع Gemini: ${errorMessage}`);
      setOutput(`خطأ في الاتصال بـ Gemini API أو معالجة الطلب:\n${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearOutput = () => {
    setOutput('');
    setError(null);
  };

  const breadcrumbItems = [
    { label: 'الرئيسية', path: ROUTES.HOME },
    { label: 'ساحة الأكواد' },
  ];

  return (
    <div className="max-w-5xl mx-auto h-full flex flex-col">
      <Breadcrumbs items={breadcrumbItems} />
      <header className="mb-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-400">ساحة أكواد بايثون</h1>
        <p className="text-md text-gray-400 mt-2">
          اكتب كود بايثون الخاص بك هنا، وسيقوم الذكاء الاصطناعي بمحاكاة تنفيذه وتقديم شرح له.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        {/* Code Input Area */}
        <div className="flex flex-col bg-slate-800/70 p-4 rounded-xl shadow-lg border border-slate-700/80">
          <label htmlFor="codeInput" className="text-lg font-semibold text-sky-300 mb-2">
            أدخل كود بايثون هنا:
          </label>
          <textarea
            id="codeInput"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="print('مرحباً بعالم بايثون!')"
            className="flex-grow bg-gray-900 text-gray-200 border border-slate-600 rounded-md p-3 font-mono text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-y"
            rows={15}
            spellCheck="false"
            aria-label="منطقة إدخال كود بايثون"
          />
          <button
            onClick={handleRunCode}
            disabled={isLoading || !process.env.API_KEY}
            className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 rounded-lg transition-colors duration-200 disabled:bg-gray-500/70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>جاري التشغيل...</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                </svg>
                <span>شغل الكود</span>
              </>
            )}
          </button>
        </div>

        {/* Output Area */}
        <div className="flex flex-col bg-slate-800/70 p-4 rounded-xl shadow-lg border border-slate-700/80">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-sky-300">المخرجات والشرح:</h2>
            <button
              onClick={handleClearOutput}
              disabled={isLoading}
              className="text-xs bg-slate-600 hover:bg-slate-500 text-gray-300 py-1 px-3 rounded-md transition-colors duration-200 disabled:opacity-50"
            >
              مسح المخرجات
            </button>
          </div>
          {error && (
            <div role="alert" className="bg-red-500/20 border border-red-500/50 text-red-300 px-3 py-2 rounded-md mb-3 text-sm">
              <p className="font-semibold">خطأ في الواجهة:</p>
              <p>{error}</p>
            </div>
          )}
          <div 
            id="outputArea" 
            className="flex-grow bg-gray-900 text-gray-200 border border-slate-600 rounded-md p-3 font-mono text-sm whitespace-pre-wrap overflow-auto"
            aria-live="polite"
          >
            {output ? output : (isLoading ? 'جاري معالجة الكود...' : 'سيتم عرض المخرجات والشرح هنا بعد تشغيل الكود.')}
            <div ref={outputEndRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundPage;