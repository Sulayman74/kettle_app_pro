import { useMemo } from 'react';
import { Flame, Leaf, Fish, Heart } from 'lucide-react';
import { BBQ_DATA } from '../data/kettleData';

export function GrillTab({ filter, setFilter, setSelectedItem, toggleFavorite, favorites }) {
  const filteredData = useMemo(() => {
    return filter === 'all' ? BBQ_DATA : BBQ_DATA.filter(i => i.category === filter);
  }, [filter]);

  const getMethodStyle = (method) => {
    if (method.includes('Indirecte') || method === 'Planche') 
      return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
    if (method.includes('Indir/Dir')) 
      return 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30';
    return 'bg-rose-500/20 text-rose-400 border-rose-500/30'; 
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {['all', 'boeuf', 'volaille', 'poisson', 'legumes'].map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)} 
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${filter === cat ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-slate-800 text-slate-400 border border-white/5'}`}
          >
            {cat === 'all' ? 'TOUT' : cat.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {filteredData.map(item => (
          <div key={item.id} className="bg-slate-800/50 backdrop-blur-md border border-white/5 p-4 rounded-[2rem] flex items-center justify-between active:scale-[0.98] transition-all group">
            <div className="flex items-center gap-4 flex-1 cursor-pointer" onClick={() => setSelectedItem(item)}>
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {item.category === 'legumes' ? <Leaf /> : item.category === 'poisson' ? <Fish /> : <Flame />}
              </div>
              <div>
                <h4 className="font-bold text-white group-hover:text-orange-400 transition-colors">{item.name}</h4>
                <div className="flex gap-2 mt-1">
                  <span className={`text-[8px] font-black px-2 py-0.5 rounded-full border uppercase tracking-tighter ${getMethodStyle(item.method)}`}>
                    {item.method}
                  </span>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">{item.time}</p>
                </div>
              </div>
            </div>
            <button onClick={() => toggleFavorite(item.id)} className="p-3">
              <Heart className={`w-5 h-5 transition-all ${favorites.includes(item.id.toString()) ? 'fill-red-500 text-red-500 scale-110' : 'text-slate-600'}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
