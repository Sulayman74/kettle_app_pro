import { ChevronLeft, Timer, Thermometer } from 'lucide-react';
import { withAffiliate } from '../utils/affiliate';

export function RecipeModal({ selectedRecipe, setSelectedRecipe, addTimer }) {
  if (!selectedRecipe) return null;

  return (
    <div className="fixed inset-0 z-[110] bg-slate-950 flex flex-col p-6 animate-in slide-in-from-bottom duration-500">
      <button onClick={() => setSelectedRecipe(null)} className="self-start p-3 bg-white/5 rounded-2xl mb-6 active:scale-90 transition-transform"><ChevronLeft /></button>
      <div className="flex-1 overflow-y-auto space-y-8 no-scrollbar">
        <h2 className="text-3xl font-black uppercase italic text-center leading-none tracking-tighter">{selectedRecipe.title}</h2>
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => addTimer("Rotation Kettle", 5)} className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-3xl text-center flex flex-col items-center gap-1 active:scale-95 transition-all">
            <Timer className="text-orange-500 w-5 h-5" /><span className="text-[8px] font-black uppercase tracking-widest text-orange-400">+5m (Rotation)</span>
          </button>
          <button onClick={() => addTimer("Vérif Sonde", 15)} className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-3xl text-center flex flex-col items-center gap-1 active:scale-95 transition-all">
            <Thermometer className="text-blue-500 w-5 h-5" /><span className="text-[8px] font-black uppercase tracking-widest text-blue-400">+15m (Sonde)</span>
          </button>
        </div>
        <div className="space-y-4 pb-12">
          <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">Le Pas-à-Pas Master</h4>
          {selectedRecipe.steps.map((s, i) => (
            <div key={i} className="bg-slate-900 border border-white/5 p-5 rounded-[2rem] flex gap-4 shadow-xl">
              <span className="text-orange-500 font-black italic text-xl">{i+1}</span>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">{s}</p>
            </div>
          ))}
          <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 space-y-2">
            <h5 className="text-[10px] font-black uppercase text-orange-500 italic">Outil Recommandé</h5>
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold">{selectedRecipe.gear.name}</p>
              <a href={withAffiliate(selectedRecipe.gear.link)} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">Acheter</a>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => setSelectedRecipe(null)} className="w-full py-5 bg-white text-black rounded-[2rem] font-black uppercase text-sm mt-6 shadow-2xl active:scale-95 transition-all uppercase tracking-widest">Cuisson terminée</button>
    </div>
  );
}
