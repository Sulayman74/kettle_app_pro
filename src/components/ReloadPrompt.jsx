import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

export function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('Service Worker enregistré', r);
    },
    onRegisterError(error) {
      console.error('Erreur Service Worker', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  if (!offlineReady && !needRefresh) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm animate-in slide-in-from-top fade-in duration-500">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center gap-4">
        <div className={`p-2 rounded-full ${needRefresh ? 'bg-orange-500/20 text-orange-500' : 'bg-green-500/20 text-green-500'}`}>
          {needRefresh ? <RefreshCw className="w-6 h-6 animate-spin" /> : <CheckCircle2 className="w-6 h-6" />}
        </div>
        
        <div className="flex-1">
          <p className="text-sm text-white font-bold">
            {offlineReady ? "Prêt pour le mode hors-ligne" : "Mise à jour disponible"}
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            {offlineReady ? "L'app fonctionnera sans réseau." : "Une nouvelle version de l'app est prête !"}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {needRefresh && (
            <button 
              onClick={() => updateServiceWorker(true)} 
              className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors shadow-lg shadow-orange-500/20"
            >
              Recharger
            </button>
          )}
          <button 
            onClick={close} 
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
