import { X, Thermometer, Timer } from 'lucide-react';
import { withAffiliate } from '../utils/affiliate';

export function ItemModal({ selectedItem, setSelectedItem, addTimer }) {
  if (!selectedItem) return null;

  return (
    <div className="fixed inset-0 z-[120] bg-slate-950 p-6 flex flex-col animate-in fade-in duration-300">
      <button onClick={() => setSelectedItem(null)} className="self-end p-4 bg-white/5 rounded-2xl mb-8 active:scale-90 transition-transform"><X /></button>
      <div className="flex-1 space-y-8 overflow-y-auto text-center no-scrollbar pb-10">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none">{selectedItem.name}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 shadow-inner">
            <Thermometer className="mx-auto mb-2 text-orange-500" />
            <p className="text-2xl font-black">{selectedItem.target}</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest italic">Objectif</p>
          </div>
          <button 
            onClick={() => { addTimer(selectedItem.name, parseInt(selectedItem.time)); setSelectedItem(null); }} 
            className="bg-orange-500 p-6 rounded-[2rem] shadow-lg shadow-orange-500/20 active:scale-95 transition-all group"
          >
            <Timer className="mx-auto mb-2 text-white group-hover:scale-110 transition-transform" />
            <p className="text-lg font-black uppercase tracking-tighter italic">Lancer</p>
            <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">{selectedItem.time}</p>
          </button>
        </div>
        <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-[2rem] text-sm italic text-slate-200 shadow-lg">
          "{selectedItem.desc}"
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Équipement Master Recommandé</p>
          <a href={withAffiliate(selectedItem.amazon)} target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-white text-black rounded-[2rem] font-black uppercase text-sm hover:bg-orange-500 hover:text-white transition-all shadow-xl tracking-widest">
            Voir sur Amazon
          </a>
        </div>
      </div>
    </div>
  );
}
