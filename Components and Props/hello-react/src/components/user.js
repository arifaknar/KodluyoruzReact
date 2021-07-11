import { PropTypes } from 'prop-types';



// App.js den gönderilen propslar User fonksiyonu içinde parametre olarak alındı.
export default function User({isLoggedIn,userList }) {
  return (
    <>
      <h2>Ad:  Soyad:   Yaş:   </h2>
      <h4>
           {isLoggedIn
          ? userList&& userList.map((user,index)=>{
              return <div key={index}>  {user.firstName} {user.lastName} {user.age}  </div>
          })
          : "Giriş Yapmadınız!"}
      </h4>
       
     
    </>
  );
}

User.propTypes={
  isLoggedIn:PropTypes.bool.isRequired,
  userList:PropTypes.array
  // userList:PropTypes.shape({ // Shape: Obje içerisinde bulunan propertylere tür zorlaması yapmak için kullanılır.
  //   firstName:PropTypes.string,
  //   lastName:PropTypes.string,
  //   age:PropTypes.oneOfType([PropTypes.string,PropTypes.number])
  // })   
}