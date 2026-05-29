import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDjmyf2Fyx3Ugb59J9eLKAh_uA9LhL3viQ",
  authDomain: "netflix-clone-65a59.firebaseapp.com",
  projectId: "netflix-clone-65a59",
  storageBucket: "netflix-clone-65a59.firebasestorage.app",
  messagingSenderId: "612096299731",
  appId: "1:612096299731:web:c960b6998a2728751fba26"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvide: "local",
            email,
        })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async(email, password) => {
    try {
       await signInWithEmailAndPassword(auth, email, password)
    } catch (error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = () => {
    signOut(auth)
}

export {auth, db, login, signup, logout}