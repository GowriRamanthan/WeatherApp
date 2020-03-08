import Home from "../pages/index";
import { shallow, configure } from 'enzyme'
import React from "react";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe("MyComponent", () => {

    var wrapper;
    var props;
    beforeEach(async () => {
        props = await Home.getInitialProps();
        wrapper = shallow(<Home {...props} />)
    });

    it('populates the value passed as query param in calling the url', async () => {
        // Inject anything you want to test
        const props = await Home.getInitialProps({
            query: { city: "London" , "country_code": "GB"}
        });

        // And make sure it results in what you want.
        expect(props).city == 'London';
        expect(props).country_code == 'GB';
    });

    it("renders the page when called with missing or incorrect query param", async () => {
        expect(props).toEqual( {"currentWeather": null, "errorCode": 404});

    })
});