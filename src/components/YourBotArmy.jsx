function YourBotArmy ({army, onRelease}){

    return (
        <div className="your-bot-army">
            <h2>Your Army</h2>
            {army.map(bot=> {
                <div key={bot.id} onClick={()=>onRelease(bot)}>
                    <BotCard bot={bot}/>
                    </div>
            })}

        </div>
    )

}