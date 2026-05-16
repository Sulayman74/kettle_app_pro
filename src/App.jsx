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
import { useKettleData } from './hooks/useKettleData';
import { Flame } from 'lucide-react';

export default function App() {
  const { favorites, toggleFavorite } = useFirebase();
  const { timers, addTimer, removeTimer, notifications, clearNotifications } = useTimer();
  const { products: bbqData, recipes, shop_items: shopItems, methods: methodLegend, lab_data: labData, loading } = useKettleData();
  
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

      <main className="px-6 flex-1 flex flex-col">
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center pt-32 animate-pulse">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
              <Flame className="w-8 h-8 text-orange-500 animate-bounce" />
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Allumage des braises...</p>
          </div>
        ) : (
          <>
            {activeTab === 'grill' && (
              <GrillTab 
                filter={filter} 
                setFilter={setFilter} 
                setSelectedItem={setSelectedItem} 
                toggleFavorite={toggleFavorite} 
                favorites={favorites} 
                bbqData={bbqData}
              />
            )}

            {activeTab === 'lab' && (
              <LabTab 
                labSelection={labSelection} 
                setLabSelection={setLabSelection}
                methodLegend={methodLegend}
                labData={labData}
              />
            )}

            {activeTab === 'recipes' && (
              <RecipeTab 
                setSelectedRecipe={setSelectedRecipe} 
                recipes={recipes}
              />
            )}

            {activeTab === 'shop' && (
              <ShopTab shopItems={shopItems} />
            )}
          </>
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
