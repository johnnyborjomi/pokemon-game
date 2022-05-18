import cls from "./MyPokList.module.css";

const MyPoksList = ({ list }) => {
    return (
        <>
            <p>My pokemons:</p>
            <ul className={cls.pokList}>
                {list.map((item) => (
                    <li key={item.name}>
                        <img
                            className={cls.Image}
                            alt={item.name}
                            src={item.sprites.front_default}
                        />
                        <div className={cls.pokName}>{item.name}</div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MyPoksList;
