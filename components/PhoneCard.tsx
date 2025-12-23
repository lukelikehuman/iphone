
import React from 'react';
import { Phone } from '../types';

interface PhoneCardProps {
  phone: Phone;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ phone }) => {
  const discount = Math.round(((phone.originalPrice - phone.price) / phone.originalPrice) * 100);

  return (
    <div className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={phone.imageUrl} 
          alt={`${phone.brand} ${phone.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {phone.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full shadow-lg">
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
            電池 {phone.batteryHealth}%
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-wider">{phone.brand}</div>
        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
          {phone.model}
          <span className="block text-sm font-medium text-slate-500 mt-1">{phone.storage} · {phone.color}</span>
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">
            {phone.condition}
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-indigo-600">NT$ {phone.price.toLocaleString()}</span>
            <span className="text-sm text-slate-400 line-through">NT$ {phone.originalPrice.toLocaleString()}</span>
          </div>
          <div className="text-right">
            <span className="text-emerald-600 text-sm font-bold">省 NT$ {(phone.originalPrice - phone.price).toLocaleString()}</span>
          </div>
        </div>

        <button className="w-full mt-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors active:scale-95">
          查看詳情
        </button>
      </div>
    </div>
  );
};

export default PhoneCard;
