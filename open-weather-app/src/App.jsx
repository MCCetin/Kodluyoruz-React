import { useState } from "react";
function App() {
  const [data, setData] = useState({});
  async function getWeatherData() {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?id=750268&units=metric&appid=7266f2ee445db40d561260bacd2faf83"
      );
      //https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7266f2ee445db40d561260bacd2faf83 forecast API
      const data = await response.json();
      setData({
        name: data.name,
        tempature: data.main.temp,
        icon: data.weather[0].icon,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <button onClick={getWeatherData}>fetch</button>
      <br />
      <div>{data.name}</div>
      <div>{Math.floor(data.tempature)}</div>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt=""
      />
    </div>
  );
}

export default App;
