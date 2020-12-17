import axios from "axios";

export default {
    getParks: function() {
        return axios.get("/api/parks");
      },
      deletePark: function(id) {
        return axios.delete("/api/park/" + id);
      },
      getPark: function(id) {
        return axios.get("/api/park/" + id);
      },
      savePark: function(addPark) {
        return axios.post("/api/parks", addPark);
      }

}