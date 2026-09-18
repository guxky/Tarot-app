interface DailyCardProps{
    card: string;
    name: string;
    meaning: string;

}

function DailyCard(){
    return(
        <div className="daily-card">
            <img/>
            <p>
                name
            </p>
            <p>
                meaning
            </p>

        </div>
    );

}

export default DailyCard