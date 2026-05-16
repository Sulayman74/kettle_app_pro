import { useState, useEffect, useCallback } from 'react';

export function useTimer() {
  const [timers, setTimers] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((text) => {
    setNotifications(prev => [
      { id: Date.now(), text, time: new Date().toLocaleTimeString(), read: false }, 
      ...prev
    ]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prev => prev.map(t => {
        if (t.remaining > 0) {
          const newRem = t.remaining - 1;
          if (newRem === 0) {
            addNotification(`⏲️ Terminé : ${t.label}`);
          }
          return { ...t, remaining: newRem };
        }
        return t;
      }).filter(t => t.remaining > -10)); // Keep finished timers around for a few seconds
    }, 1000);
    return () => clearInterval(interval);
  }, [addNotification]);

  const addTimer = useCallback((label, minutes) => {
    setTimers(prev => [...prev, { id: Date.now(), label, total: minutes * 60, remaining: minutes * 60 }]);
    addNotification(`🚀 Minuteur lancé : ${label}`);
  }, [addNotification]);

  const removeTimer = useCallback((id) => {
    setTimers(prev => prev.filter(t => t.id !== id));
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  return { 
    timers, 
    addTimer, 
    removeTimer, 
    notifications, 
    clearNotifications 
  };
}
