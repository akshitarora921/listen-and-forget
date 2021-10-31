import {Redirect} from "react-router-dom";


const TOKEN = "https://accounts.spotify.com/api/token";
const APIBase="https://api.spotify.com/v1"

function SpotifyLogin() {
  if (window.location.search.length > 0) {
    AuthToken();
  }
  return  <Redirect to="/"/>
}
function AuthToken() {
  let AuthToken = null;
  const Url = window.location.search;
  if (Url.length > 0) {
    const UrlParam = new URLSearchParams(Url);
    AuthToken = UrlParam.get("code");
  }

  let body = `grant_type=authorization_code&code=${AuthToken}&redirect_uri=${encodeURI(
    process.env.REACT_APP_REDIRECT
  )}&client_id=${process.env.REACT_APP_Spotify_CLIENT_ID}&client_secret=${
    process.env.REACT_APP_Spotify_CLIENT_SECRET
  }`;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", TOKEN, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader(
    "Authorization",
    "Basic " +
      btoa(
        process.env.REACT_APP_Spotify_CLIENT_ID +
          ":" +
          process.env.REACT_APP_Spotify_CLIENT_SECRET
      )
  );
  xhr.send(body);
  xhr.onload = () => {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
     
      if (data.access_token !== undefined) {
        let access_token = data.access_token;
        localStorage.setItem("access_token", access_token);
      }
      if (data.refresh_token !== undefined) {
        let refresh_token = data.refresh_token;
        localStorage.setItem("refresh_token", refresh_token);
      }
    }localStorage.setItem("Login-Status","LogedIn")
  };
  window.history.pushState("", "", process.env.REACT_APP_REDIRECT);
  
}

function addPlaylist(songId){
  let user_id
  let playlist_id
  songId=["spotify:track:444Xp2WWzTQREUznLf5xVF"]
  let Songs={
    "uris":songId,
    "position":0
  }
 
  callApi("GET",APIBase+"/me",null,function(){
      var data=JSON.parse(this.responseText);
      if (this.status===200){
       
        user_id = data.id
        callApi("GET",APIBase+"/users/"+user_id+"/playlists?limit=50&offset=0",null,function(){
          if(this.status===200){
            var data=JSON.parse(this.responseText);
            playlist_id= data.items[0].id
            callApi("POST",APIBase+"/playlists/"+playlist_id+"/tracks",JSON.stringify(Songs),function(){
              if(this.status===201){
                console.log("Succesfully added")
              }
        
            })
            
          }
        })
       
      }
    })

  
 
  }


// let access_token=localStorage.getItem("access_token")
// let refresh_token=localStorage.getItem("refresh_token")
function callApi(method,url,body,callback) {
  let xhr=new XMLHttpRequest();
  xhr.open(method,url,true)
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.setRequestHeader("Authorization",'Bearer '+localStorage.getItem("access_token"));
  xhr.send(body);
  xhr.onload=callback;



}


export { SpotifyLogin,addPlaylist };
