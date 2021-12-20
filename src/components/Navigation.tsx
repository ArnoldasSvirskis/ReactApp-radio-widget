import minus from "../PNG/minus.png";
import plus from "../PNG/plus.png";
import logo from "../PNG/Layer.png";
import styles from "../styles/Navigation.module.css";

const Navigation: React.FC<{
  onMinusClick: () => void;
  onPlusClick: () => void;
}> = (props) => {
  return (
    <div className={styles.navigation}>
      <button onClick={props.onMinusClick}>
        <img src={minus} />
      </button>
      <img src={logo}></img>
      <button onClick={props.onPlusClick}>
        <img src={plus} />
      </button>
    </div>
  );
};

export default Navigation;
