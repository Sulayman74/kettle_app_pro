import { Flame, BookOpen, Beaker, ShoppingBag } from 'lucide-react';

export function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'grill', icon: Flame, label: 'Grill' },
    { id: 'recipes', icon: BookOpen, label: 'Guide' },
    { id: 'lab', icon: Beaker, label: 'Lab' },
    { id: 'shop', icon: ShoppingBag, label: 'Shop' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-24 bg-slate-950/90 backdrop-blur-2xl border-t border-white/5 px-4 flex justify-around items-center z-50">
      {tabs.map(tab => (
        <button 
          key={tab.id} 
          onClick={() => setActiveTab(tab.id)} 
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === tab.id ? 'text-orange-500 -translate-y-1' : 'text-slate-600 hover:text-slate-400'}`}
        >
          <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]' : ''}`} />
          <span className="text-[9px] font-black uppercase tracking-tighter">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
