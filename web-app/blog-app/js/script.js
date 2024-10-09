// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getDatabase, set, ref, get, remove, update } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1kmGqKVLTu7Q-zXby8-1pm_u5JnWY_wU",
    authDomain: "blogging-website-8d0fc.firebaseapp.com",
    databaseURL: "https://blogging-website-8d0fc-default-rtdb.firebaseio.com",
    projectId: "blogging-website-8d0fc",
    storageBucket: "blogging-website-8d0fc.appspot.com",
    messagingSenderId: "427127883779",
    appId: "1:427127883779:web:09ff55dcc5333d67f2e636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const my_blog = document.querySelector('.my_blog');
const login_page = document.querySelector('.login');

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        my_blog.classList.add('show');
        login_page.classList.add('hide');
    } else {
        my_blog.classList.remove('show');
        login_page.classList.remove('hide');
    }
});

// Sign in functionality
function SignInUSer() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials.user.uid);
        })
        .catch((error) => {
            console.error(error);
        });
}

document.getElementById('sign_in').addEventListener('click', SignInUSer);

// Sign up functionality
function signUpUser() {
    const email = document.getElementById('signup_email').value;
    const password = document.getElementById('signup_password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log("User signed up:", userCredentials.user.uid);
        })
        .catch((error) => {
            console.error(error);
        });
}

document.getElementById('sign_up').addEventListener('click', signUpUser);

// Sign out functionality
document.getElementById('logout').addEventListener('click', () => {
    signOut(auth).then(() => {
        // Successfully signed out
    }).catch((error) => {
        console.error("Error during sign-out:", error);
    });
});
//  ------------
// Blog section code 

 const notify = document.querySelector('.notifiy')

const add_post_Btn  = document.querySelector('#post_btn')

function Add_Post(){
     const title = document.querySelector('#title').value;
     const post_content = document.querySelector('#post_content').value;
      const id = Math.floor(Math.random()*100)

      set(ref(db,'post/' + id),{
          title:title,
          post_content:post_content
      })
      notify.innerHTML = "data Added"
      document.querySelector('#title').value="";
     document.querySelector('#post_content').value="";

     GetPostData()
}


add_post_Btn.addEventListener('click',Add_Post)

// Get Data from firebase Db

 function GetPostData(){
     const user_ref = ref(db,'post/')
      get(user_ref).then((snapshot)=>{
         const data = snapshot.val()
        
          let html = "";
          const table = document.querySelector('table')
          for( const key in data){
             const {title,post_content} = data[key]

               html+= `
                <tr>
                     <td> <span class="postNumber"></span></td>
                     <td>${title} </td>
                     <td> <button class="delete" onclick="delete_data(${key})">Delete</button> </td>
                     <td> <button class="update" onclick="update_data(${key})">Update</button> </td>
                </tr>
               `
          }

          table.innerHTML = html



      })
 }

 GetPostData()

//  delete_data

window.delete_data = function(key){
  
     remove(ref(db,`post/${key}`))
     notify.innerHTML ="data Deleted"
     GetPostData()

}

// get and update data 

 window.update_data = function (key) {
     const user_ref = ref(db,`post/${key}`)

      get(user_ref).then((item)=>{
         document.querySelector('#title').value = item.val().title;
         document.querySelector('#post_content').value = item.val().post_content;
        })


           const update_btn = document.querySelector('.update_btn')
            update_btn.classList.add('show')
             document.querySelector('.post_btn').classList.add('hide')
//   update

            function Update_Form (){
                const title = document.querySelector('#title').value;
                const post_content = document.querySelector('#post_content').value;

                  update(ref(db ,`post/${key}`),{
                     title:title,
                     post_content:post_content
                  })
               GetPostData()

                

            }




    

      update_btn.addEventListener('click',Update_Form)

                  
   }