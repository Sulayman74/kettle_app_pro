import React, { useState } from 'react';
import { Header } from './components/Header';
import { NotificationPanel } from './components/NotificationPanel';
import { TimerPanel } from './components/TimerPanel';
import { Navigation } from './components/Navigation';
import { GrillTab } from './components/GrillTab';
import { LabTab } from './components/LabTab';
import { RecipeTab } from './components/RecipeTab';
import { ShopTab } from './components/ShopTab';
import { ItemModal } from './components/ItemModal';
import { RecipeModal } from './components/RecipeModal';
import { useFirebase } from './hooks/useFirebase';
import { useTimer } from './hooks/useTimer';

export default function App() {
  const { favorites, toggleFavorite } = useFirebase();
  const { timers, addTimer, removeTimer, notifications, clearNotifications } = useTimer();
  
  const [activeTab, setActiveTab] = useState('grill');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showNotifs, setShowNotifs] = useState(false);
  const [labSelection, setLabSelection] = useState('boeuf');

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans pb-32">
      <Header 
        notifications={notifications} 
        showNotifs={showNotifs} 
        setShowNotifs={setShowNotifs} 
      />

      {showNotifs && (
        <NotificationPanel 
          notifications={notifications} 
          clearNotifications={clearNotifications} 
        />
      )}

      <TimerPanel 
        timers={timers} 
        removeTimer={removeTimer} 
      />

      <main className="px-6">
        {activeTab === 'grill' && (
          <GrillTab 
            filter={filter} 
            setFilter={setFilter} 
            setSelectedItem={setSelectedItem} 
            toggleFavorite={toggleFavorite} 
            favorites={favorites} 
          />
        )}

        {activeTab === 'lab' && (
          <LabTab 
            labSelection={labSelection} 
            setLabSelection={setLabSelection} 
          />
        )}

        {activeTab === 'recipes' && (
          <RecipeTab 
            setSelectedRecipe={setSelectedRecipe} 
          />
        )}

        {activeTab === 'shop' && (
          <ShopTab />
        )}
      </main>

      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <RecipeModal 
        selectedRecipe={selectedRecipe} 
        setSelectedRecipe={setSelectedRecipe} 
        addTimer={addTimer} 
      />

      <ItemModal 
        selectedItem={selectedItem} 
        setSelectedItem={setSelectedItem} 
        addTimer={addTimer} 
      />
    </div>
  );
}
