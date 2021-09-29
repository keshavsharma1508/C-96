//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDbeqx_SvSPp751tD2MVhbxNIKYtgwF7YU",
      authDomain: "kwitter-573d7.firebaseapp.com",
      databaseURL: "https://kwitter-573d7-default-rtdb.firebaseio.com",
      projectId: "kwitter-573d7",
      storageBucket: "kwitter-573d7.appspot.com",
      messagingSenderId: "790560111804",
      appId: "1:790560111804:web:f434cc39802d84d08ba4b9"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "";
}