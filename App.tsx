
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            أهلاً بك في موقع الويب الخاص بي
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            تم بناء هذه الصفحة باستخدام أحدث تقنيات الويب مثل React و Tailwind CSS لتقديم تجربة مستخدم رائعة وتصميم عصري.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">لماذا React وليس HTML فقط؟</h2>
            <p className="text-gray-700 leading-relaxed">
              على الرغم من أن HTML هو أساس الويب، إلا أن استخدام إطار عمل مثل React يسمح بإنشاء واجهات مستخدم تفاعلية وديناميكية قابلة للتطوير. هذا يوفر تجربة أكثر سلاسة للمستخدم ويجعل تطوير الميزات المعقدة أسهل في المستقبل.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
