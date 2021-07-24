import React, { useState } from 'react'

export default function UseStateInput() {

    const [form,setForm]=useState({name:'name',surName:"surName"})
    

    const changeForm=(e)=>setForm({...form,[e.target.name]:e.target.value})
    return (
        <div style={{textAlign:"center"}}>
            <hr></hr>

                <input name="name" value={form.name} onChange={changeForm} autoComplete="off"></input>
                <p>Ad: <span>{form.name}</span></p>
                <input name="surName" value={form.surName} onChange={changeForm} autoComplete="off"></input>
                <p>Soyad: <span>{form.surName}</span></p>
            <hr></hr>
        </div>
    )
}
