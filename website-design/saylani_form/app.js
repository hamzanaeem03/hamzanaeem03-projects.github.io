// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth , onAuthStateChanged , createUserWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
 const firebaseConfig = {
   apiKey: "AIzaSyAOHf0w5wBtC0LSczskrm4hfzEbh4VNf00",
   authDomain: "web-site-3dc4a.firebaseapp.com",
   projectId: "web-site-3dc4a",
   storageBucket: "web-site-3dc4a.appspot.com",
   messagingSenderId: "249706508601",
   appId: "1:249706508601:web:67ce58dd0139df1702f8e8",
   measurementId: "G-2W2SY3TTNK"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const analytics = getAnalytics(app);

 const signup_email = document.getElementById('signup_email');
const signup_password= document.getElementById("signup_password");
const signup_btn = document.getElementById("signup_btn");
signup_btn.addEventListener('click', createUserAccount)
 onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log('loggedin')
      // ...
    } else {
        console.log('not loggedin')
      
    }
  });


  function createUserAccount(){
    console.log(signup_email.value)
    console.log(signup_password.value)

    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value``)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  }