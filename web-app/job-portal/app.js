// Your Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAOHf0w5wBtC0LSczskrm4hfzEbh4VNf00",
  authDomain: "web-site-3dc4a.firebaseapp.com",
  projectId: "web-site-3dc4a",
  storageBucket: "web-site-3dc4a.appspot.com",
  messagingSenderId: "249706508601",
  appId: "1:249706508601:web:67ce58dd0139df1702f8e8",
  measurementId: "G-2W2SY3TTNK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Form submission
document.getElementById('jobForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const experience = document.getElementById('experience').value;
  const salary = document.getElementById('salary').value;
  const location = document.getElementById('location').value;

  db.collection("jobs").add({
      title: title,
      description: description,
      experience: experience,
      salary: salary,
      location: location
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('jobForm').reset();
      loadJobs();
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
});

// Load jobs
function loadJobs() {
  db.collection("jobs").get().then((querySnapshot) => {
      const jobList = document.getElementById('jobList');
      jobList.innerHTML = '';
      querySnapshot.forEach((doc) => {
          const job = doc.data();
          jobList.innerHTML += `<div class="job">
              <h2>${job.title}</h2>
              <p>${job.description}</p>
              <p><strong>Experience:</strong> ${job.experience} years</p>
              <p><strong>Salary:</strong> ${job.salary}</p>
              <p><strong>Location:</strong> ${job.location}</p>
          </div>`;
      });
  });
}

// Initial load
loadJobs();
