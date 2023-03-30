import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const app = firebase.initializeApp({
    apiKey: "AIzaSyCACj54ec7wuQIHjfl3f21L8HXM4ZEWDis",
    authDomain: "dropbox-adham.firebaseapp.com",
    projectId: "dropbox-adham",
    storageBucket: "dropbox-adham.appspot.com",
    messagingSenderId: "22550258639",
    appId: "1:22550258639:web:24b94372dc7d404397a8ba"
});
const firestore = app.firestore();

export const database = {
    folders: firestore.collection("folders"),
    files: firestore.collection("files"),
    formatDoc: doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage = app.storage();
export const auth = app.auth();
export default app;

