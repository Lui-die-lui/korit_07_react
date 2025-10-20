import { useEffect, useState } from "react";
import "./App.css";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState({
    // json으로 왔다갔다해서 객체임
    temp: "",
    desc: "",
    icon: "",
  });

  // get 요청
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=${apiKey}&lang=kr&units=Metric`
       // APIkey ❌ → appid ✅
       // &lang=kr -> 날씨 정보를 한글로 표시하고싶으면 해당 param 붙여주면 됨 
       // &units=Metric -> 섭씨 단위 사용
    )
      .then((response) => response.json())
      .then((result) => {
        // 객체형태 {} 로 넣어줌
        setWeather({ // json으로 변환된 들어오는 api 값을 넣어줌 
          temp: result.main.temp,
          desc: result.weather[0].description,
          icon: result.weather[0].icon,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  if (weather.icon) {
    return (
      <>
        <p>기온 : {weather.temp}</p>
        <p>설명 : {weather.desc}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="날씨 아이콘"
        />
      </>
    );
  } else {
    return (
      <>
        <div>Loding...</div>
      </>
    );
  }
}

export default App;
