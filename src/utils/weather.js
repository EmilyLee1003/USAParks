import axios from "axios";

const BASEURL = "http://api.openweathermap.org/data/2.5/weather?q="
const APIKEY = "&appid=a4a90310c5798c25f8cf1b53c610e354";


export default {
    searchWeather: function(city){
        return axios.get(BASEURL+city+APIKEY);
    }
};
