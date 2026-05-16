import { Timer, Trash2 } from 'lucide-react';

export function TimerPanel({ timers, removeTimer }) {
  if (timers.length === 0) return null;

  return (
    <div className="px-6 mb-6">
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-3xl p-4 space-y-3 shadow-lg">
        <p className="text-[8px] font-black uppercase text-orange-500 flex items-center gap-1 tracking-widest">
          <Timer className="w-3 h-3" /> Chronos Actifs
        </p>
        {timers.map(t => (
          <div key={t.id} className="flex items-center justify-between gap-4">
            <span className="text-[10px] font-bold text-white uppercase flex-1 truncate">{t.label}</span>
            <div className="w-24 bg-slate-900 h-1.5 rounded-full overflow-hidden shrink-0">
              <div 
                className="bg-orange-500 h-full transition-all duration-1000" 
                style={{ width: `${(t.remaining / t.total) * 100}%` }}
              ></div>
            </div>
            <span className="text-[10px] font-mono font-bold text-orange-400 w-10 text-right">
              {Math.floor(t.remaining / 60)}:{(t.remaining % 60).toString().padStart(2, '0')}
            </span>
            <button onClick={() => removeTimer(t.id)} className="p-1 hover:text-red-500 transition-colors">
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
