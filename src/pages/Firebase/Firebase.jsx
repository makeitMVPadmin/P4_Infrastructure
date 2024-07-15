import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";


// Set up our config for Firebase
// Define these in your env file, the values can be found in the project settings page on Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Grab some data
const data = await getDocs(collection(db, "Communities"));


const Firebase = () => {
    return (
        <div className="home">
            <h1 className="home__title"> Welcome to the Firebase page.</h1>
            <div>
                <h3>Here's are the communities currently in the back end:</h3>
                {data.docs.map((doc) => <p key={doc.id}>{doc._document.data.value.mapValue.fields.communityName.stringValue}</p>)}
            </div>
        </div>
    );
};

export default Firebase;
