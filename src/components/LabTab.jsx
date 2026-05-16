import { Info, TreePine, Droplets, Zap } from 'lucide-react';
import { METHOD_LEGEND, LAB_DATA } from '../data/kettleData';

export function LabTab({ labSelection, setLabSelection }) {
  return (
    <div className="space-y-8 animate-in slide-in-from-left duration-500">
      <div className="p-6 bg-slate-900 border border-white/5 rounded-[2.5rem] shadow-2xl">
        <h4 className="text-[10px] font-black uppercase text-slate-500 mb-4 tracking-widest flex items-center gap-2">
          <Info className="w-4 h-4" /> Légende des Cuissons
        </h4>
        <div className="grid grid-cols-1 gap-4">
          {METHOD_LEGEND.map((m, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className={`w-10 h-10 rounded-2xl ${m.color}/10 border border-${m.color}/20 flex items-center justify-center text-xl shrink-0`}>
                {m.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-black uppercase tracking-tighter ${m.color.replace('bg-', 'text-')}`}>
                    {m.label}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${m.color}`}></div>
                </div>
                <p className="text-[10px] text-slate-300 font-medium">{m.desc}</p>
                <p className="text-[9px] text-slate-500 italic">{m.setup}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar px-1">
        {Object.keys(LAB_DATA).map(key => (
          <button 
            key={key} 
            onClick={() => setLabSelection(key)}
            className={`flex flex-col items-center gap-2 p-4 rounded-3xl transition-all border min-w-[90px] shrink-0 ${labSelection === key ? 'bg-orange-500 border-orange-400 shadow-lg scale-105 z-10' : 'bg-slate-800 border-white/5 opacity-50 grayscale hover:grayscale-0'}`}
          >
            <span className="text-2xl">{LAB_DATA[key].icon}</span>
            <span className="text-[10px] font-black uppercase tracking-tighter">{LAB_DATA[key].label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h4 className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2 tracking-widest">
            <TreePine className="w-4 h-4" /> Bois de Fumage Idéal
          </h4>
          <div className="grid gap-3">
            {LAB_DATA[labSelection].woods.map((w, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-3xl group hover:border-orange-500/40 transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm text-white uppercase italic">{w.name}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < w.power ? 'bg-orange-500' : 'bg-slate-700'}`}></div>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 italic">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2 tracking-widest">
            <Droplets className="w-4 h-4 text-blue-400" /> Profil d'Épices (Rub)
          </h4>
          <div className="bg-slate-900/50 p-6 rounded-[2rem] border border-white/5 flex flex-wrap gap-2 shadow-inner">
            {LAB_DATA[labSelection].spices.map((s, idx) => (
              <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-orange-400 uppercase tracking-tighter">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 bg-orange-500/10 border border-orange-500/20 rounded-[2rem] flex gap-4 items-center shadow-lg">
          <Zap className="text-orange-500 w-10 h-10 shrink-0" />
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase text-orange-500 tracking-widest italic">Astuce Lab</p>
            <p className="text-xs text-slate-300 italic leading-relaxed">{LAB_DATA[labSelection].tip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
