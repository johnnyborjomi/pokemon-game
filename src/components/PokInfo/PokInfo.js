import cls from "./PokInfo.module.css";

const PokInfo = ({ info, isLoading }) => {
    if (isLoading) return;

    const { sprites, stats } = info;

    return (
        <div className={cls.pokInfo}>
            <h3 className={cls.pokName}>Name: {info.name}</h3>
            <img
                className={cls.Image}
                alt={info.name}
                src={sprites.front_default}
            />
            Stats:
            <ul>
                {stats.map((stat) => (
                    <li key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokInfo;
