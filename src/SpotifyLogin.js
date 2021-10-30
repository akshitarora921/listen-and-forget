import React from 'react'

const TOKEN = "https://accounts.spotify.com/api/token"
function SpotifyLogin() {
   
    if (window.location.search.length > 0) {
        AuthToken();
    }
    return (
        <div></div>
    )

}
    function AuthToken() {
    let AuthToken = null;
    const Url = window.location.search;
    if (Url.length > 0) {
        const UrlParam = new URLSearchParams(Url);
        AuthToken = UrlParam.get("code")
        

    }
   
    let body = `grant_type=authorization_code&code=${AuthToken}&redirect_uri=${encodeURI(process.env.REACT_APP_REDIRECT)}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', "Basic " + btoa(process.env.REACT_APP_CLIENT_ID + ":" + process.env.REACT_APP_CLIENT_SECRET));
    xhr.send(body);
    xhr.onload = () => {
       
        if (xhr.status === 200) {
            
        var data = JSON.parse(xhr.responseText);
         console.log(data)
            if (data.access_token
                !== undefined) {
                let access_token = data.access_token;
                localStorage.setItem("access_token", access_token);
            }
            if (data.refresh_token
                !== undefined) {
                let refresh_token = data.refresh_token;
                localStorage.setItem("refresh_token", refresh_token);
            }

        }
    }
    window.history.pushState("","",process.env.REACT_APP_REDIRECT)





}

export { SpotifyLogin }