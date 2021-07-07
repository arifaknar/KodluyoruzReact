import axios from "axios";

const getData = async(userId) => {
   
    try {

         const { data: users } = await axios(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const { data: post1 } = await axios(
          `https://jsonplaceholder.typicode.com/posts/${userId}`
        );
        
       
      return [users,post1];
    } catch (err) {
      return err;
    }
 
};

export default getData
