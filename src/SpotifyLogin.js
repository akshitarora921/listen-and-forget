import { Button } from '@chakra-ui/button';
import React from 'react'
// https://accounts.spotify.com/authorize?client_id=fc000051926242fd85c661fd69868f98&response_type=code&redirect_uri=http://127.0.0.1:3000&show_dialog=true&scope=user-read-private user-read-email
function SpotifyLogin() {
    const BaseUri = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_client_id}&response_type=code&redirect_uri=${process.env.REACT_APP_redirect_uri}&show_dialog=true&scope=${process.env.REACT_APP_scope}`;

    return (
        <div>
           
            <Button  right='3' top='3' _focus={{ outline: "none" }} onClick={() => { window.open(BaseUri,"_self")}}>Login</Button>
        </div>
    )
}

export default SpotifyLogin
