import { useEffect, useState } from "react";
import { isEmpty, differenceBy, sample, random } from "lodash";

import { fetchAll, fetchByName } from "./api/pokemon-api";

import Btn from "./components/UI/Btn/Btn";
import Title from "./components/UI/Title/Title";
import PokInfo from "./components/PokInfo/PokInfo";
import MyPoksList from "./components/MyPoksList/MyPoksList";
import Message from "./components/Message/Message";

function getRandomPok(pokList, caughtPokList) {
    if (pokList.length === caughtPokList.length);
    const freePokemons = differenceBy(pokList, caughtPokList, "name");
    const newPok = sample(freePokemons);
    return newPok;
}

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [activePok, setActivePok] = useState({});
    const [pokLoading, setPokLoading] = useState(false);
    const [caughtPoksList, setCaughtPoksList] = useState([]);
    const [isCaughtMessageVisible, setIsCaughtMessageVisible] = useState(false);
    const [isCaughtMessagePositive, setIsCaughtMessagePositive] =
        useState(false);

    useEffect(() => {
        (async () => {
            const pokemons = await fetchAll();
            setPokemonList(pokemons);
        })();
    }, []);

    const handleNewPokemon = async () => {
        setPokLoading(true);
        setActivePok(null);
        const newPok = getRandomPok(pokemonList.results, caughtPoksList);
        const newPokInfo = await fetchByName(newPok.name);
        setActivePok(newPokInfo);
        setPokLoading(false);
    };

    const onPokCatchAttempt = () => {
        const isCaught = random(0, 1);
        if (isCaught) setCaughtPoksList((prev) => [...prev, activePok]);
        setIsCaughtMessageVisible(true);
        setIsCaughtMessagePositive(isCaught);
        setTimeout(() => {
            setIsCaughtMessageVisible(false);
            handleNewPokemon();
        }, 2000);
    };

    return (
        <div className="App">
            <Title>Pokemon Game</Title>

            {caughtPoksList.length > 0 && <MyPoksList list={caughtPoksList} />}

            <div className="pok-info">
                {!pokLoading && isEmpty(activePok) && (
                    <h2>Click the button to get random Pokemon!</h2>
                )}
                {isCaughtMessageVisible && (
                    <Message
                        isCaughtMessagePositive={isCaughtMessagePositive}
                    />
                )}
                {!pokLoading && !isEmpty(activePok) && (
                    <PokInfo info={activePok} />
                )}
                {pokLoading && (
                    <div className={"loading-message"}>...Loading</div>
                )}
            </div>

            <Btn
                onClick={handleNewPokemon}
                size={"lg"}
                bg={"green"}
                color={"white"}
                disabled={isCaughtMessageVisible || pokLoading}
            >
                Get Random Pokemon!
            </Btn>

            <Btn
                className={"mgt-10"}
                onClick={onPokCatchAttempt}
                size={"lg"}
                bg={"red"}
                color={"white"}
                disabled={isCaughtMessageVisible || isEmpty(activePok)}
            >
                Throw Pokeball!
            </Btn>
        </div>
    );
}

export default App;
