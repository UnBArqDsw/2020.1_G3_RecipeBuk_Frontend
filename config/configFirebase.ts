import { environment } from 'src/environments/environment';
import  * as firebase from 'firebase' ;
//import "firebase/auth";

 export const setupFirebase = () => {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: environment.apiKey,
    authDomain: environment.authDomain,
    databaseURL: environment.databaseURL,
    projectId: environment.projectId,
    storageBucket: environment.storageBucket,
    messagingSenderId: environment.messagingSenderId,
    appId: environment.appId
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}


