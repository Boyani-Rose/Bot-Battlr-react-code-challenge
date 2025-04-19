import {useState, useEffect} from 'react'
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './style.css';

function App() {

    const [bots, setBots] = useState([])
    const [army, setArmy] = useState([])

    useEffect(()=>{
      fetch('http://localhost:8001/bots')
      .then((response)=>response.json())
      .then((data)=>setBots(data))
    }, [])

    const addToArmy = (bot) =>{
      if (!army.find(b => b.id === bot.id)) {
        setArmy([...army, bot])
      }
    }

    const releaseFromArmy = (bot) => {
      setArmy(army.filter(b=> b.id !== bot.id))
    }

    const deleteBot = (id) => {

      fetch(`http://localhost:8001/bots/${id}`, {
        method: 'DELETE'
      })
      .then(()=>{
        setArmy(army.filter(b => b.id !==id))
        setBots(bots.filter(b => b.id !==id))
      })

    }

  return (
    
    <div className='App'>
      <YourBotArmy army={army} onRelease={releaseFromArmy}/>
      <BotCollection bots={bots} onAddToArmy={addToArmy} onDelete={deleteBot}/>
    </div>

   
   
  );
}

export default App;
