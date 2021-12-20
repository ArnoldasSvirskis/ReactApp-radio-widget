import styles from "../styles/Current.module.css";
import { useState } from "react";
import Station from "../model/station";
import Navigation from "./Navigation";

const Current: React.FC<{ selected: string }> = (props) => {
  return (
    <div className={styles.current}>
      <p>CURRENTLY PLAYING</p>
      <h3>{props.selected}</h3>
    </div>
  );
};

export default Current;
