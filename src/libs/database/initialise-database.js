import firebase from "firebase";
import "firebase/firestore";

const initialiseDatabase = () => {
  const firestore = firebase
    .initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
    })
    .firestore();

  firestore.settings({ timestampsInSnapshots: true });
  return firestore;
};

export default initialiseDatabase;
