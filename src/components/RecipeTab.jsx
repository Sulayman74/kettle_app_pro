import { RECIPES } from '../data/kettleData';

export function RecipeTab({ setSelectedRecipe }) {
  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-500">
      <h2 className="text-2xl font-black uppercase italic text-orange-500 tracking-tighter">Guides Maîtres</h2>
      {RECIPES.map(r => (
        <div key={r.id} className="bg-slate-800/80 border border-white/10 p-6 rounded-[2.5rem] space-y-4 shadow-xl">
          <div className="flex justify-between items-start">
            <span className="bg-orange-500 text-[10px] font-black px-3 py-1 rounded-full uppercase italic text-white tracking-widest">{r.tag}</span>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{r.difficulty}</p>
          </div>
          <h3 className="text-xl font-bold font-heading italic">{r.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{r.desc}</p>
          <button onClick={() => setSelectedRecipe(r)} className="w-full py-4 bg-white text-slate-950 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg active:scale-95 transition-all">Lancer le Guide</button>
        </div>
      ))}
    </div>
  );
}
