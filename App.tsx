
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhoneCard from './components/PhoneCard';
import AIAdvisor from './components/AIAdvisor';
import { FEATURED_PHONES, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Confidence Section */}
        <section id="why-us" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">為什麼選擇 RePhone？</h2>
              <p className="mt-4 text-slate-600">我們重新定義二手交易，讓每一筆購買都充滿信心。</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">專業認證檢測</h3>
                <p className="text-slate-600">每一台手機都經過專業技師 70+ 項嚴格功能測試，確保功能 100% 正常。</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">180 天無憂保固</h3>
                <p className="text-slate-600">我們提供優於業界的半年保固服務，非人為因素故障，我們負責到底。</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">7 天鑑賞期</h3>
                <p className="text-slate-600">收到貨不滿意？沒關係！我們提供 7 天退換貨服務，您的滿意是我們的最高標準。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section id="phones" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">精選現貨型號</h2>
                <p className="mt-2 text-slate-600">所有產品皆已完成深度清潔與系統重置，開機即用。</p>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50">篩選品牌</button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50">排序：熱門度</button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURED_PHONES.map(phone => (
                <PhoneCard key={phone.id} phone={phone} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="px-8 py-3 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
                查看更多產品
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">來自客戶的真實聲音</h2>
              <p className="mt-4 text-slate-600">累積超過 10,000+ 真實好評，我們用心服務每一位追求卓越的人。</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map(item => (
                <div key={item.id} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < item.rating ? 'text-amber-400' : 'text-slate-200'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-8 flex-1">「{item.content}」</p>
                  <div className="flex items-center gap-4">
                    <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full ring-2 ring-white shadow-sm" />
                    <div>
                      <div className="font-bold text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-400">購買：{item.phoneBought}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-indigo-600 rounded-[3rem] p-12 lg:p-24 text-center overflow-hidden">
               <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-indigo-500 rounded-full blur-[80px] opacity-50"></div>
               <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500 rounded-full blur-[80px] opacity-50"></div>
               
               <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8 relative z-10">準備好升級您的手機了嗎？</h2>
               <p className="text-indigo-100 text-lg lg:text-xl mb-12 max-w-2xl mx-auto relative z-10">加入 20,000+ 位滿意客戶的行列。立即選購，最快明天送到家。</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                 <button className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-xl active:scale-95">
                   現在去選購
                 </button>
                 <button className="px-10 py-5 bg-indigo-700 text-white border border-indigo-400 rounded-2xl font-bold text-xl hover:bg-indigo-800 transition-all active:scale-95">
                   我想先賣手機
                 </button>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-xl font-bold tracking-tight">RePhone</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                專業二手手機平台，致力於推動電子產品循環利用，為您節省預算，同時保護地球。
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">選購分類</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">iPhone 系列</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Samsung 系列</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Google Pixel 系列</a></li>
                <li><a href="#" className="hover:text-white transition-colors">預算型專區</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">售後服務</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">保固條款</a></li>
                <li><a href="#" className="hover:text-white transition-colors">退換貨流程</a></li>
                <li><a href="#" className="hover:text-white transition-colors">檢測報告查詢</a></li>
                <li><a href="#" className="hover:text-white transition-colors">常見問題</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">聯絡我們</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>客服電話：02-2345-6789</li>
                <li>服務時間：週一至週五 10:00 - 19:00</li>
                <li>門市地址：台北市信義區忠孝東路五段 100 號</li>
                <li>Email：service@rephone.com.tw</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
            <p>© 2024 RePhone 專業二手手機。保留所有權利。</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-300">隱私權政策</a>
              <a href="#" className="hover:text-slate-300">服務條款</a>
              <a href="#" className="hover:text-slate-300">Cookie 設定</a>
            </div>
          </div>
        </div>
      </footer>

      <AIAdvisor />
    </div>
  );
};

export default App;
