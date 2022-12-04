import React from "react";
import ProfilePhoto from "../component/profile/ProfilePhoto";
import FullName from "../component/profile/FullName";
import Address from "../component/profile/Address";


const Profile = ()=> {
    return (
      <div style={{ marginLeft : 300 , marginTop : 150 , border: '1px solid red' , width  : 300,hight : 300}}>
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    );
  }
  
  export default Profile;
  