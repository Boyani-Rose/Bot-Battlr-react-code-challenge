function YourBotArmy({ army, onRelease }) {
  return (
    <div className="your-bot-army">
      <h2>Your Army</h2>
      {army.map((bot) => (
        <div key={bot.id} className="army-bot" onClick={() => onRelease(bot)}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>{bot.catchphrase}</p>
        </div>
      ))}
    </div>
  );
}
export default YourBotArmy;
