//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYnQdF_ewTV7bV7CxcJLEtUCGJoM98Zls",
    authDomain: "kwitter-class-project-94.firebaseapp.com",
    databaseURL: "https://kwitter-class-project-94-default-rtdb.firebaseio.com",
    projectId: "kwitter-class-project-94",
    storageBucket: "kwitter-class-project-94.appspot.com",
      messagingSenderId: "64198826347",
    appId: "1:64198826347:web:bc23977415855d1bb9942e"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);




user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");


function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}