
import axios from "axios"

// async function getData() {
//   const {data:users} = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   const {data:post1} = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   const {data:post2} = await axios(
//     "https://jsonplaceholder.typicode.com/posts/2"
//   );

//   console.log("Users: ",users)
//   console.log("Post1: ", post1);
//   console.log("Post2:", post2);
// }

// getData();

const subNumber=(a,b)=>{
  return new Promise(async(resolve,reject)=>{
    const toplam=a+b
     await toplam>10 ? resolve("Güzel Sonuç, Toplama: "+toplam):reject("bERBAT, Toplama: "+toplam)    
  } )
} 
const subTractionNumber=(a,b)=>{
  return new Promise(async(resolve,reject)=>{
    const cikarma=a-b
     await cikarma>0 ? resolve("Güzel Sonuç, Çıkarma: "+cikarma):reject("bERBAT, Çıkarma: "+cikarma)    
  } )
} 

const getTodos=()=>{
  return new Promise(async(resolve,reject)=>{
    try{
      const {data}= await axios('https://jsonplaceholder.typicode.com/todos/1')
       resolve(data)
      
    }
    catch(err){
        reject(err)
    }
    
  })
}

Promise.all([getTodos(),subNumber(5,19),subTractionNumber(20,13)]).then(sonuc=>console.log(sonuc)).catch(console.log) 
// Sıralı Çıktı için Promises.all([f1(),f2()....]) kalıbı kullanılabilir.