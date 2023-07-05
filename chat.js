var firebaseConfig = {
    apiKey: "AIzaSyCieCtfQP9-GDaY-uPkT9sDfHex6N-W3SA",
    authDomain: "let-chat-525a7.firebaseapp.com",
    projectId: "let-chat-525a7",
    storageBucket: "let-chat-525a7.appspot.com",
    messagingSenderId: "152823664994",
    appId: "1:152823664994:web:0adc23385a116101341c3b",
    measurementId: "G-K6DHT8D02H"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



