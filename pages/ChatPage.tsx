
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, Chat, Part, GenerateContentResponse } from "@google/genai";
import { ROUTES } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';
import CodeIcon from '../components/icons/CodeIcon'; // Placeholder for AI icon
import PythonIcon from '../components/icons/PythonIcon'; // Placeholder for User icon

// Helper function to convert file to base64
const fileToGenerativePart = async (file: File): Promise<Part> => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
};

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text?: string;
  imageUrl?: string; // For displaying user-uploaded image previews
  timestamp: Date;
  isLoading?: boolean; // For AI messages that are being generated
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chat, setChat] = useState<Chat | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (!process.env.API_KEY) {
        setError("API key is missing. Please configure it in your environment variables.");
        setIsLoading(false);
        return;
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const newChat = ai.chats.create({
        model: 'gemini-2.5-flash-preview-04-17',
        // config: { thinkingConfig: { thinkingBudget: 0 } } // Disable thinking for faster response if needed
      });
      setChat(newChat);
    } catch (e) {
      console.error("Error initializing GenAI or Chat:", e);
      setError(`Failed to initialize AI chat. ${e instanceof Error ? e.message : String(e)}`);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if ((!inputText.trim() && !selectedImage) || !chat) return;

    const userMessageText = inputText.trim();
    const userMessageId = `user-${Date.now()}`;
    
    const userMessage: ChatMessage = {
      id: userMessageId,
      sender: 'user',
      text: userMessageText || undefined,
      imageUrl: selectedImage ? previewImageUrl || undefined : undefined,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);

    setInputText('');
    setSelectedImage(null);
    setPreviewImageUrl(null);
    setIsLoading(true);
    setError(null);

    const aiMessageId = `ai-${Date.now()}`;
     setMessages(prev => [...prev, { 
        id: aiMessageId, 
        sender: 'ai', 
        text: 'يفكر البود...', 
        timestamp: new Date(),
        isLoading: true,
      }]);

    try {
      const messageParts: Part[] = [];
      if (selectedImage) {
        messageParts.push(await fileToGenerativePart(selectedImage));
      }
      if (userMessageText) {
        messageParts.push({ text: userMessageText });
      }
      
      // Corrected line: 'parts' array is now the value for the 'message' property
      const response: GenerateContentResponse = await chat.sendMessage({ message: messageParts });
      
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessageId ? { ...msg, text: response.text, isLoading: false } : msg
      ));

    } catch (e) {
      console.error("Error sending message to AI:", e);
      const errorMessage = e instanceof Error ? e.message : String(e);
      setError(`فشل إرسال الرسالة للذكاء الاصطناعي: ${errorMessage}`);
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessageId ? { ...msg, text: `خطأ: ${errorMessage}`, isLoading: false, sender: 'ai' } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // Limit file size (e.g., 4MB for Gemini Flash)
      if (file.size > 4 * 1024 * 1024) { 
        setError("حجم الصورة كبير جداً. الحد الأقصى 4 ميجا بايت.");
        return;
      }
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      setError(null); // Clear previous errors
    }
  };

  const breadcrumbItems = [
    { label: 'الرئيسية', path: ROUTES.HOME },
    { label: 'دردشة مع الذكاء الاصطناعي' },
  ];

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col" style={{minHeight: 'calc(100vh - 12rem)'}}>
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-400 mb-6 text-center">دردشة مع الذكاء الاصطناعي</h1>
      
      {error && (
        <div role="alert" className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-4 text-center">
          <p>{error}</p>
        </div>
      )}

      <div className="flex-grow bg-slate-800/70 rounded-xl shadow-xl border border-slate-700/80 p-4 sm:p-6 overflow-y-auto mb-4" style={{maxHeight: '60vh'}}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-xl shadow ${
                msg.sender === 'user' 
                  ? 'bg-sky-600 text-white rounded-br-none' 
                  : 'bg-slate-700 text-gray-200 rounded-bl-none'
              }`}
            >
              <div className="flex items-center mb-1">
                {msg.sender === 'ai' ? <CodeIcon className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 text-teal-400 flex-shrink-0" /> : <PythonIcon className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 text-yellow-400 flex-shrink-0" />}
                <span className="text-xs text-gray-400">{msg.sender === 'user' ? 'أنت' : 'الذكاء الاصطناعي'} - {msg.timestamp.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              {msg.imageUrl && (
                <img src={msg.imageUrl} alt="User upload preview" className="rounded-lg my-2 max-w-full h-auto max-h-60 object-contain"/>
              )}
              {msg.text && <p className="text-sm whitespace-pre-wrap">{msg.text}</p>}
              {msg.isLoading && <div className="text-xs text-gray-400 mt-1 animated-ellipsis"></div>}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {previewImageUrl && (
        <div className="mb-3 p-2 border border-slate-600 rounded-lg bg-slate-700/50 w-fit mx-auto">
          <img src={previewImageUrl} alt="Selected preview" className="max-w-xs max-h-32 rounded object-contain"/>
          <button 
            onClick={() => { setSelectedImage(null); setPreviewImageUrl(null); if(fileInputRef.current) fileInputRef.current.value = ""; }}
            className="mt-1 text-xs text-red-400 hover:text-red-300"
            aria-label="إلغاء الصورة المختارة"
          >
            إلغاء الصورة
          </button>
        </div>
      )}

      <div className="bg-slate-800/90 p-3 sm:p-4 rounded-xl shadow-inner border border-slate-700/90 flex items-center gap-2 sm:gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          className="hidden"
          id="imageUpload"
          aria-label="اختيار صورة"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="p-2.5 rounded-full text-sky-400 hover:text-sky-300 hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="إرفاق صورة"
          title="إرفاق صورة"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </button>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          placeholder="اكتب رسالتك هنا... (اضغط Shift+Enter لسطر جديد)"
          className="flex-grow p-2.5 bg-slate-700 border border-slate-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-none placeholder-gray-500 text-sm"
          rows={1}
          style={{minHeight: '44px', maxHeight: '120px'}}
          aria-label="صندوق إدخال الرسالة"
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading || (!inputText.trim() && !selectedImage) || !chat}
          className="p-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white transition-all duration-200 disabled:bg-gray-500/70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800"
          aria-label="إرسال الرسالة"
          title="إرسال الرسالة"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transform rotate-180 rtl:rotate-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
