import { Bell, BellDot } from 'lucide-react';

export function Header({ notifications, showNotifs, setShowNotifs }) {
  return (
    <header className="p-6 pt-12 flex justify-between items-center relative z-[60]">
      <div>
        <p className="text-orange-500 font-bold text-[10px] tracking-widest uppercase italic">Kettle Master Pro</p>
        <h1 className="text-3xl font-black tracking-tight font-heading uppercase italic">
          Kettle<span className="text-orange-500">Master</span>
        </h1>
      </div>
      <button onClick={() => setShowNotifs(!showNotifs)} className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center relative">
        {notifications.some(n => !n.read) ? <BellDot className="text-orange-500 animate-pulse" /> : <Bell className="text-slate-400" />}
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#0f172a]">
            {notifications.length}
          </span>
        )}
      </button>
    </header>
  );
}
