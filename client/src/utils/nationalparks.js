import axios from "axios";

const BASEURL = "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode="
const APIKEY = "&api_key=uIc3AE373j1gY21GkFjbZZajKwbnLacqzgbla85a";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    searchParks: function(stateCode){
        return axios.get(
            BASEURL + stateCode + APIKEY
        );
    },
    getCaliforniaParks: function() {
        return axios.get(BASEURL+"CA"+APIKEY);
    }
};
