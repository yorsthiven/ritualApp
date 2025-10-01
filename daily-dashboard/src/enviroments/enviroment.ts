// export const environment = {
//   production: false,
//   firebase: {
//     apiKey: "tu_api_key",
//     authDomain: "tu_auth_domain",
//     projectId: "tu_project_id",
//     storageBucket: "tu_storage_bucket",
//     messagingSenderId: "tu_sender_id",
//     appId: "tu_app_id"
//   }
// };


// Your web app's Firebase configuration
// export const firebaseConfig = {
//   apiKey: "AIzaSyDaFqxbhfkOuST8s6iaj4jIYsP7nlp3fC8",
//   authDomain: "daily-dashboard-26f07.firebaseapp.com",
//   projectId: "daily-dashboard-26f07",
//   storageBucket: "daily-dashboard-26f07.firebasestorage.app",
//   messagingSenderId: "812892785253",
//   appId: "1:812892785253:web:10cbbc62616ef0123ad48c"
// };


// export const environment = {
//   production: false,
//   firebaseConfig : {
//   apiKey: "AIzaSyDaFqxbhfkOuST8s6iaj4jIYsP7nlp3fC8",
//   authDomain: "daily-dashboard-26f07.firebaseapp.com",
//   projectId: "daily-dashboard-26f07",
//   storageBucket: "daily-dashboard-26f07.firebasestorage.app",
//   messagingSenderId: "812892785253",
//   appId: "1:812892785253:web:10cbbc62616ef0123ad48c"
// }
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDaFqxbhfkOuST8s6iaj4jIYsP7nlp3fC8",
  authDomain: "daily-dashboard-26f07.firebaseapp.com",
  projectId: "daily-dashboard-26f07",
  storageBucket: "daily-dashboard-26f07.firebasestorage.app",
  messagingSenderId: "812892785253",
  appId: "1:812892785253:web:10cbbc62616ef0123ad48c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
