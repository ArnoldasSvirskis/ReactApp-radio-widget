import { ReactNode } from "react";
import styles from "../styles/Card.module.css";

const Card: React.FC<{ children: ReactNode }> = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
