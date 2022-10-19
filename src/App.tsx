import React, { useState } from "react";


const App: React.FC = () => {
   const [temperatureValue, setTemperatureValue] = useState<number>(15);

   let temperatureColor: string = "neutral";

   if (temperatureValue <= 10) {
      temperatureColor = "cold";
   } else if (temperatureValue > 10 && temperatureValue < 20) {
      temperatureColor = "neutral";
   } else {
      temperatureColor = "hot";
   };

   const increaseTemperature = () => {
      if (temperatureValue === 30) return;

      const newTemperature = temperatureValue + 1;
      setTemperatureValue(newTemperature);
   };

   const decreaseTemperature = () => {
      if (temperatureValue === 0) return;

      const newTemperature = temperatureValue - 1;
      setTemperatureValue(newTemperature);
   };

   return (
      <div className="app-container">
         <div className="temperature-display-container">
            <div className={`temperature-display ${temperatureColor}`}>
               {temperatureValue}°C
            </div>
         </div>
         <div className="button-container">
            <button onMouseDown={increaseTemperature}>+</button>
            <button onClick={decreaseTemperature}>-</button>
         </div>
      </div>
   );
};

export default App;




