import { Flame, BookOpen, Beaker, ShoppingBag } from 'lucide-react';

export function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { 
      id: 'grill', 
      icon: Flame, 
      label: 'Grill',
      activeText: 'text-orange-400',
      activeIcon: 'text-orange-500',
      activeBg: 'bg-orange-500/15',
      glowShadow: 'drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]',
      dotBg: 'bg-orange-500',
      dotGlow: 'shadow-[0_0_8px_rgba(249,115,22,1)]'
    },
    { 
      id: 'recipes', 
      icon: BookOpen, 
      label: 'Guide',
      activeText: 'text-amber-400',
      activeIcon: 'text-amber-500',
      activeBg: 'bg-amber-500/15',
      glowShadow: 'drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]',
      dotBg: 'bg-amber-500',
      dotGlow: 'shadow-[0_0_8px_rgba(245,158,11,1)]'
    },
    { 
      id: 'lab', 
      icon: Beaker, 
      label: 'Lab',
      activeText: 'text-emerald-400',
      activeIcon: 'text-emerald-500',
      activeBg: 'bg-emerald-500/15',
      glowShadow: 'drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]',
      dotBg: 'bg-emerald-500',
      dotGlow: 'shadow-[0_0_8px_rgba(16,185,129,1)]'
    },
    { 
      id: 'shop', 
      icon: ShoppingBag, 
      label: 'Shop',
      activeText: 'text-cyan-400',
      activeIcon: 'text-cyan-500',
      activeBg: 'bg-cyan-500/15',
      glowShadow: 'drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]',
      dotBg: 'bg-cyan-500',
      dotGlow: 'shadow-[0_0_8px_rgba(6,182,212,1)]'
    }
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 px-6 z-50 flex justify-center pointer-events-none">
      <nav className="bg-slate-900/95 backdrop-blur-3xl border border-white/10 p-2 rounded-[2rem] flex items-center justify-between gap-1 shadow-[0_20px_40px_rgba(0,0,0,0.5)] pointer-events-auto max-w-md w-full">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id)} 
              className={`relative flex-1 py-3 flex flex-col items-center justify-center gap-1.5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] rounded-[1.5rem] group overflow-hidden ${isActive ? '' : 'hover:bg-white/5'}`}
            >
              {/* Fond actif */}
              <div className={`absolute inset-0 ${tab.activeBg} transition-opacity duration-500 ease-out ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              
              {/* Icône */}
              <tab.icon className={`w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 ${isActive ? `${tab.activeIcon} scale-110 ${tab.glowShadow} -translate-y-0.5` : 'text-slate-500 group-hover:text-slate-400 group-hover:-translate-y-0.5'}`} />
              
              {/* Texte */}
              <span className={`text-[9px] font-black uppercase tracking-widest z-10 transition-colors duration-500 ease-out ${isActive ? tab.activeText : 'text-slate-600 group-hover:text-slate-500'}`}>
                {tab.label}
              </span>
              
              {/* Petit point indicateur */}
              <div className={`absolute bottom-1 w-1 h-1 rounded-full ${tab.dotBg} transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${tab.dotGlow} ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 translate-y-2'}`} />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
