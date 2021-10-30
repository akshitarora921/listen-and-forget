import React from 'react'
import {Button} from "@chakra-ui/button"

 function SpotifyLogin() {
   return( <Button onClick={()=>{
        window.open(process.env.REACT_APP_LOGIN,"_self")
    }}>Login</Button>)
   
}

export {SpotifyLogin}