import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import React from "react";
import Error from 'next/error'

import Menu from '../components/page-elements/menu'
import SubMenu from '../components/page-elements/sub-menu';

import WeatherTile from '../components/tiles/weather';


const Home = ({currentWeather, errorCode}) => {
    if (errorCode) {
        return <Error statusCode={errorCode}/>
    }
    return <div className="container">
        <Head>
            <title>Weather App</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" type="text/css" href="/css/open-weather-icons.css"/>
        </Head>

        <main>
            <Menu/>
            <SubMenu/>

            <h1 className="title">
                Weather
            </h1>

            <div className="tile-grid">
                <WeatherTile currentWeather={currentWeather}/>
            </div>
        </main>

        <footer>
        </footer>

        <style jsx>{``}</style>

        <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        background: #1d1e21;
        color: #fff;
        font-size: 1em;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
      
      h1 {
        background: #24272d;
        margin: 0;
        padding: 12px 20px;
        font-weight: 100;
        font-size: 1.8em;
      }
      
      .tile-grid {
        padding: 10px;
      }
      
      .tile {
        background: #24272c;
        width: 25%;

        min-width: 400px;
        overflow: hidden;
      }
      
    `}</style>
    </div>
};

Home.getInitialProps = async ctx => {
    try {
        if (ctx.query && ctx.query.city && ctx.query.country_code) {
            const res = await fetch(`https://c79v09314e.execute-api.us-east-1.amazonaws.com/dev/weather?city=${ctx.query.city}&&country_code=${ctx.query.country_code}`);
            const json = await res.json();
            if (json.cod == 404) {
                return {currentWeather: null, errorCode: 404}
            }
            return {currentWeather: json, errorCode: null}
        } else {
            return {currentWeather: null, errorCode: 404}
        }
    } catch (error) {
        return {currentWeather: null, errorCode: 404}
    }
};

export default Home
