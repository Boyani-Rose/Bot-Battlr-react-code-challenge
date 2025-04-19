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

  return (
    
    <div>
      <YourBotArmy army={army} />
      <BotCollection bots={bots} />
    </div>

   
   
  );
}

export default App;
