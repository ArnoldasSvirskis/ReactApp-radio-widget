import styles from "../styles/StationItem.module.css";
import Station from "../model/station";

const StationItemTop: React.FC<{ stations: Station[] }> = (props) => {
  return (
    <div className={styles.stations}>
      {props.stations.slice(0, 1).map((station) => (
        <ul key={station.id}>
          <li>{station.name}</li>
          <li>{station.fm}</li>
        </ul>
      ))}
    </div>
  );
};

export default StationItemTop;
