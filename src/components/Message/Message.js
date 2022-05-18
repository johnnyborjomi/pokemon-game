import cls from "./Message.module.css";

const Message = ({ isCaughtMessagePositive }) => {
    if (isCaughtMessagePositive) {
        return <h2 className={`${cls.message} ${cls.win}`}>You win!</h2>;
    }
    return <h2 className={`${cls.message} ${cls.lose}`}>You lose!</h2>;
};

export default Message;
