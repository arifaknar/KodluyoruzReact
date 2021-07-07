/*
push
map
find
filter
some :Array de Koşulan uyar bir veri var mı diye bakar ve  true yada false döner
every : Array de Koşula bütün hepsi uyuyorsa true, bir tane bile uymayan varsa false döner.
includes : Arrayın içinde girilen ifadenin olup olmaığına göre tru ya da false döner.
*/


const animals=["lion","bird","elephant","cat","leylek"]  
animals.push("dog")                             //Push
console.log(animals)

animals.map(animal=>{                           //Map
    console.log(animal)
})

const findResult=animals.find((item) => item=="dog") // Find:Eşleşen ilk değeri döndürür.

console.log(findResult);

const filterResult=animals.filter(item=>item.slice(0,2)==="le") //Filter:Eşleşen tüm değerleri dizi olarak döndürür.
console.log(filterResult);

const includesResult=animals.includes("lion",3) //İncludes(searchname,index)
console.log(includesResult);
