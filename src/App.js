import {useState, useEffect} from 'react'
import './App.css';

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
    

  return (
    
    <div>
      <YourBotArmy army={army} />
      <BotCollection bots={bots} onAddToArmy={addToArmy}/>
    </div>

   
   
  );
}

export default App;
