
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/50 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
          年度特賣：二手手機全系列 7 折起
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          以超值價格，<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            擁抱如新手機
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg lg:text-xl text-slate-600 mb-12 leading-relaxed">
          RePhone 專業認證二手手機。每一台都經過 70+ 項嚴格檢測，享 180 天保固與 7 天鑑賞期。
          品質透明，讓您買得放心，用得開心。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#phones" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200/50 active:scale-95">
            瀏覽所有型號
          </a>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all active:scale-95">
            瞭解檢測流程
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-indigo-600">20,000+</span>
            <span className="text-slate-500 text-sm mt-1">已售出手機</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-indigo-600">70+</span>
            <span className="text-slate-500 text-sm mt-1">項專業檢測</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-indigo-600">180天</span>
            <span className="text-slate-500 text-sm mt-1">安心保固</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-indigo-600">4.9/5</span>
            <span className="text-slate-500 text-sm mt-1">客戶滿意度</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
