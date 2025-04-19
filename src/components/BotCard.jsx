function BotCard({bot, onAddToArmy, onDelete}) {
  return (
    <div className="bot-card" onClick={()=>onAddToArmy(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button className="delete-btn" onClick={(e)=>{
        e.stopPropagation()
        onDelete(bot.id)
      }}>X</button>
    </div>
  );
}
export default BotCard;
