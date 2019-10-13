import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [icountry, seticountry] = useState("");
  const [countriesshow, setcountriesshow] = useState([]);
  const [weatherobjects, setweatherobjects] = useState([]);
  const filtercountry = countries.filter(country =>
    country.name.toLowerCase().startsWith(icountry.toLowerCase())
  );
  //console.log(countries);
  const displaycountries = filtercountry.map(country => {
    let displayweather = weatherobjects.map(weather => {
      return weather.location.country.includes(country.name) ? (
        <div key={country.name}>
          <h4>Weather in {country.name}</h4>
          <h5>Temperature: {weather.current.temp_f}</h5>
          <img src={weather.current.condition.icon} />
          <h5>wind: {weather.current.condition.gust_kph}kph direction ssw</h5>
        </div>
      ) : (
        ""
      );
    });
    if (countriesshow.includes(country.name)) {
      return (
        <div key={country.name}>
          <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h4>languages</h4>
            <ul>
              {country.languages.map(lang => {
                return <li key={lang.name}>{lang.name}</li>;
              })}
            </ul>
            <img src={country.flag} width="200px" />
            {displayweather}
          </div>
          <button
            onClick={() => {
              if (countriesshow.includes(country.name)) {
                console.log(
                  "this is already int the array, i'm going to take it off now"
                );
                const copyshow = countriesshow.filter(show => {
                  return show != country.name;
                });
                setcountriesshow(copyshow);
                const copyweather = weatherobjects.filter(weather => {
                  return weather.location.country != country.name;
                });
                setweatherobjects(copyweather);
              }
            }}
          >
            unshow
          </button>
        </div>
      );
    } else {
      return (
        <li key={country.name}>
          {country.name}
          <button
            onClick={() => {
              setcountriesshow([...countriesshow, country.name]);
              axios
                .get(
                  "http://api.apixu.com/v1/forecast.json?key=2f83f7a9e9b544f1891194145191507&q=+" +
                    country.capital
                )
                .then(response => {
                  setweatherobjects([...weatherobjects, response.data]);
                });
            }}
          >
            Show
          </button>
        </li>
      );
    }
  });

  //make a for loop, push all the objects that i need into an array and then display it
  const finaldisplay =
    icountry == "" ? (
      <div>Type in Something</div>
    ) : filtercountry.length > 10 ? (
      <div>get a little bit more specific</div>
    ) : filtercountry.length === 1 ? (
      <div>
        <h2>{filtercountry[0].name}</h2>
        <p>capital {filtercountry[0].capital}</p>
        <p>population {filtercountry[0].population}</p>

        <h4>languages</h4>
        <ul>
          {filtercountry[0].languages.map(lang => {
            return <li key={lang.name}>{lang.name}</li>;
          })}
        </ul>
        <img src={filtercountry[0].flag} width="200px" />
      </div>
    ) : (
      <div>{displaycountries}</div>
    );
  const changeicountry = e => {
    console.log(e.target.value);
    seticountry(e.target.value);
  };
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);
  console.log(weatherobjects);
  const shownames = countries.map(country => country.name);
  return (
    <div>
      <label>Find countries</label>
      <input value={icountry} onChange={changeicountry} />
      {finaldisplay}
    </div>
  );
}

export default App;
