interface InteractiveCardProps{
    card: string;
    message: string;
}

function InteractiveCard( ){
    return(
        <div className="interactive-card"> 
            <img src="https://via.placeholder.com/150" alt="Imagen de prueba"/>
            <p>
                pruebas por ahora
            </p>
        </div>
    );
}

export default InteractiveCard