import styles from "../styles/StationItem.module.css";
import Station from "../model/station";

const StationItem: React.FC<{ stations: Station[] }> = (props) => {
  return (
    <div className={styles.stations}>
      {props.stations.slice(1, 3).map((station) => (
        <ul key={station.id}>
          <li>{station.name}</li>
          <li>{station.fm}</li>
        </ul>
      ))}
    </div>
  );
};

export default StationItem;
