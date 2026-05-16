import { ExternalLink } from 'lucide-react';
import { SHOP_ITEMS } from '../data/kettleData';

export function ShopTab() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-2xl font-black uppercase italic text-orange-500 text-center tracking-tighter leading-none">Boutique Expert</h2>
      <div className="grid gap-4 pb-10">
        {SHOP_ITEMS.map(p => (
          <div key={p.id} className="bg-white/5 p-5 rounded-3xl flex items-center justify-between border border-white/10 group active:scale-95 transition-all shadow-lg">
            <div className="text-3xl w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">{p.img}</div>
            <div className="flex-1 px-4">
              <h4 className="font-bold text-sm group-hover:text-orange-400 transition-colors uppercase tracking-tight">{p.name}</h4>
              <p className="text-orange-500 font-black text-lg">{p.price}</p>
            </div>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="p-4 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/20 active:bg-orange-600">
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
