import { Button } from '@chakra-ui/button';
import React from 'react'
// 
function SpotifyLogin() {
    
    return (
        <div>
           {console.log(process.env.REACT_APP_LOGIN)}
            <Button  right='3' top='3' _focus={{ outline: "none" }} onClick={() => { window.open(process.env.REACT_APP_LOGIN,"_self")}}>Login</Button>
        </div>
    )
}




export default SpotifyLogin
