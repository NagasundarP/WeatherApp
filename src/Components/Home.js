import React,{useState} from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../Graphql/Query';

const Home = ()=>{
    const [citySearched, setCitySearched] = useState('');
    const [getWeather, { loading, error, data }] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: { name: citySearched },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error found!</p>;
    if(data){
        console.log(data);
    }
    // console.log(citySearched);

    return(
        <div className="home">
            <h1>Search for Weather</h1>
            <input type="text" placeholder="City name...." onChange={(e)=>{setCitySearched(e.target.value)}} />
            <button onClick={()=>getWeather}> Search </button>
            <div className="weather">
                {data && (
                    <>
                        <h2>{data.getCityByName.name}</h2>
                        <h3>{data.getCityByName.weather.temperature.actual}</h3>
                        <h3>{data.getCityByName.weather.summary.description}</h3>
                        <h3>{data.getCityByName.weather.summary.title}</h3>
                        <h3>Wind Speed: {data.getCityByName.weather.wind.speed}</h3>

                    </>
                )}
            </div>
        </div>
    )

}

export default Home;