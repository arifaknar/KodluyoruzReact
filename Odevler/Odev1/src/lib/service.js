import axios from "axios";

const getData = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {

         const { data: users } = await axios(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const { data: post1 } = await axios(
          `https://jsonplaceholder.typicode.com/posts/${userId}`
        );
        
       
      resolve([users,post1]);
    } catch (err) {
      reject(err);
    }
  });
};

export default getData
