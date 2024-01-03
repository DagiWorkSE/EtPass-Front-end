import React, { useState } from 'react';
import Footer from "../components/Footer";
import Navs from "../components/Navs";
import UserCheckStatus from "../components/UserCheckStatus";

function UserStatus() {
    return(
        
          <>
            <Navs />
            <UserCheckStatus/>
            <Footer />
               
          </>
          );
        }


export default UserStatus;