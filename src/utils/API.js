import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getEmployees: async () => {
    const results = await axios.get("https://randomuser.me/api/?results=200&nat=us");
    console.log(results);

    return results.data.results.map(employee => {
      return ({
        image: employee.picture.thumbnail,
        name: `${employee.name.first} ${employee.name.last}`,
        phone: employee.phone,
        email: employee.email,
        dateOfBirth: employee.dob.date
      });

    }) 
  }
};