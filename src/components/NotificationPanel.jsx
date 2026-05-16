export function NotificationPanel({ notifications, clearNotifications }) {
  return (
    <div className="absolute top-28 right-6 left-6 max-w-sm ml-auto z-[70] animate-in fade-in slide-in-from-top-2">
      <div className="bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-4 bg-slate-800 flex justify-between items-center border-b border-white/5">
          <span className="text-xs font-black uppercase tracking-widest italic text-orange-500">Alertes</span>
          <button onClick={clearNotifications} className="text-[10px] text-slate-500 font-bold uppercase">Effacer</button>
        </div>
        <div className="max-h-64 overflow-y-auto p-2">
          {notifications.length === 0 ? <p className="text-center py-8 text-xs text-slate-600 italic">Aucune alerte</p> : 
            notifications.map(n => (
              <div key={n.id} className="p-3 bg-white/5 rounded-xl flex justify-between items-start mb-1">
                <p className="text-xs text-slate-300 font-medium">{n.text}</p>
                <span className="text-[8px] text-slate-500 uppercase">{n.time}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
