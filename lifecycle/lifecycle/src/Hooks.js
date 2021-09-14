import{useState,useEffect} from 'react'

export default function Hooks() {

    // useState(): İlgili state in güncellenmesini useState hook özelliği ile gerçekleştirdik.
    let [name, setName]=useState('ARİF'); 
    let [age, setAge]=useState(25);

    // useEffect(()=>...),[]) ilgili state in ilk defa render edildiğinde veya güncellendiğinde yakalnmasını sağlağan hook özelliğidir.
    
    useEffect(()=>{console.log(`Dom ilk defa render etti`);},[]); 
    useEffect(()=>{console.log(`Name güncellendi.`);},[name]);
    useEffect(()=>{console.log(`Age güncellendi.`);},[age]);
    return (
        <>
        
        <hr></hr>
        <div onClick={()=>setName('Emir')}>{name}</div>
        <div onClick={()=>setAge(age-1)}>{age}</div>
        
        </>
    )
}
