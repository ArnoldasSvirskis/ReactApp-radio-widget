import styles from "../styles/Switch.module.css";
import backBtn from "../PNG/back-arrow.png";
import switchBtn from "../PNG/switch.png";

const SwitchOnHeader = () => {
  return (
    <div className={styles.header}>
      <button>
        <img src={backBtn} />
      </button>
      <h2>STATIONS</h2>
      <button>
        <img src={switchBtn} />
      </button>
    </div>
  );
};

export default SwitchOnHeader;
