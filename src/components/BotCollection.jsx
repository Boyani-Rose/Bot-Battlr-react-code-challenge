function BotCollection(){
    return (
        <div className="bot-collection">
            {bots.map((bot)=>(
                <BotCard key={bot.id} bot={bot} />
            ))}

        </div>
    )
}
export default BotCollection;