import fetch from "node-fetch";

// Normal fetch işlemi
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
// .then((users)=>console.log(users))

//İç İçe fetching işlemi
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
// .then((users)=>{
//     console.log("Users:",users)
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response)=>response.json())
//     .then((post)=>console.log("Post 1:",post))

//     fetch("https://jsonplaceholder.typicode.com/posts/2")
//     .then((response)=>response.json())
//     .then((post)=>console.log("Post 2:",post))
    
// })

//Asenkron kodlar içerisinde bir işlem yapmamız gerekirse bunu iki şekilde yapabiliriz. Yukarıdaki gibi iç içe fetchler sayesinde.
//Ya da async-awiat yapısını kullanarak.

async function getData() { 
    const users =await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    const post1=await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const post2=await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()
    
    console.log(users)
    
 }

 getData()