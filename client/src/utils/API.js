import axios from "axios";

export default {
  // Gets all companies
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the company with the given id
  getUser: function(id) {
    return axios.get("api/users/" + id);
   },
  getUsersByService: function(serviceName) {
    console.log("GET USERS BY SERVICE API")
    console.log(serviceName.services);
    return axios.get("/api/services/" + serviceName.services);
  }
  
  // // Deletes the Compnay with the given id
  // deleteCompany: function(id) {
  //   return axios.delete("/api//" + id);
  // }
};
