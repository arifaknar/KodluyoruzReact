import  { React,useState } from 'react'

export default function Form({addContacts,contacts}) { // App.js den gelen propslar alındı. Kullanım: {props1,props2...}
    const formInputs={fullName:"",phoneNumber:""};
    const [form,setForm]=useState(formInputs);
    const onChangeInput=(e)=>{
        
        
        setForm({ ...form,[e.target.name]:e.target.value});
        
    }
    const onSubmit=(e)=>{ //Form Gönderme İşlemi
          e.preventDefault();
        if(form.fullName==="" || form.phoneNumber===""){ 
            return false;
        }
        addContacts([...contacts,form]); //Eklenen contactları app.js altında oluşturduğumuz contacts useState i içinde topladık.
        setForm(formInputs);
        console.log(form);
    }
    return (
        <form onSubmit={onSubmit} >
            <div>
                <input name="fullName" value={form.fullName} placeholder="Full Name" onChange={onChangeInput}/>
            </div>
            <div>
                <input name="phoneNumber" value={form.phoneNumber}  placeholder="Phone Number" onChange={onChangeInput}/>
            </div>
            <div>
                <input type="submit" value="Add" />
            </div>
        
        </form>
    )
}
