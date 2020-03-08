import {getWeatherIcon, getTime} from './weather'

const currentWeather = {
    weather: [
        {
            icon: '02n'
        }
    ],
};

const unix_timestamp = 1583758129;

describe("weather", () => {
    it('get weather icon returns the correct class name', async() => {
        expect(getWeatherIcon(currentWeather)).toBe("owi-02n owi-5x owi");
    });

    it('get time converts the unix stamp to date', async() => {
        expect(getTime(unix_timestamp)).toBe("12:48");
    })
});