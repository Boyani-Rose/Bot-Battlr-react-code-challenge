import { useState, useEffect } from "react";
import "./App.css";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./style.css";
import FilterBar from './components/FilterBar';
import SortBar from './components/SortBar';


function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };
  const handleFilterChange = (botClass, isChecked) => {
    setFilters(prev => 
      isChecked 
        ? [...prev, botClass] 
        : prev.filter(c => c !== botClass)
    );
  };
  const handleSortChange = (attribute) => {
    setSortBy(attribute);
  };

  const filteredAndSortedBots = () => {
    let result = [...bots];
    
    if (filters.length > 0) {
      result = result.filter(bot => filters.includes(bot.bot_class));
    }

 

  if (sortBy) {
    result.sort((a, b) => b[sortBy] - a[sortBy]);
  }
  
  return result;
};
const releaseFromArmy = (bot) => {
  setArmy(army.filter(b => b.id !== bot.id));
};
  const deleteBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter((b) => b.id !== id));
      setBots(bots.filter((b) => b.id !== id));
    });
  };

  return (
    <div className="App">
                <FilterBar onFilterChange={handleFilterChange} />
                <SortBar onSortChange={handleSortChange} />
      <YourBotArmy army={army} onRelease={releaseFromArmy} />
      <BotCollection bots={filteredAndSortedBots()} onAddToArmy={addToArmy} onDelete={deleteBot} />
    </div>
  );
}

export default App;
