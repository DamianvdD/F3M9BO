import Navigation from "../Components/Navigation/Navigation";
import Header from "../Components/Header/Header";

const HomePage = () => {
    return(
        <>
            <Navigation />
            <Header
                bigTitle="Bohrium Clothing" 
                smallTitle="The official store of Bohrium Clothing"
            />
        </>
    );
}

export default HomePage;