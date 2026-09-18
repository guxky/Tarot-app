import DailyCard from "../components/DailyCard";
import InteractiveCard from "../components/InteractiveCard";
import TopBar from "../components/TopBar";

function Home(){
    return(
        <>
         <TopBar />
         <p>Esta es la pagina principal y aqui es donde estara todo</p>
         <p>ALgun visaje</p> 
         <InteractiveCard />
         <InteractiveCard />
         <InteractiveCard />
         <DailyCard />
        </>

    );

}

export default Home