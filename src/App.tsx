import SwitchOnHeader from "./components/Switch";
import StationItemBottom from "./components/StationItemBottom";
import Card from "./components/Card";
import Navigation from "./components/Navigation";
import Current from "./components/Current";
import StationItemTop from "./components/StationItemTop";
import { useState } from "react";

import Station from "./model/station";

const stations = [
  new Station("Puttin FM", 101.4),
  new Station("Radiocentras", 105.4),
  new Station("M1", 101.4),
];

let index = 0;
console.log(stations);

function App() {
  const [selectedStation, selectStation] = useState<string>("Off");

  console.log(index);

  const selectMinusHandler = () => {
    if (index == 0) {
      index = stations.length;
    }
    index--;
    selectStation(stations[index].name);
  };

  const selectPlusHandler = () => {
    if (index == stations.length - 1) {
      index = -1;
    }
    index++;
    selectStation(stations[index].name);
  };

  return (
    <Card>
      <SwitchOnHeader />
      <StationItemTop stations={stations} />

      <Navigation
        onMinusClick={selectMinusHandler}
        onPlusClick={selectPlusHandler}
      />
      <StationItemBottom stations={stations} />

      <Current selected={selectedStation} />
    </Card>
  );
}

export default App;
