
// Inicializador
import { initializeApp } from "firebase/app";
// Storage do firebase
import { getStorage } from "firebase/storage";

// Configs base do firebase
const firebaseConfig = {
  apiKey: "AIzaSyAemwErpdcKObrSvRBZsOV_u6XHLVkMJq4",
  authDomain: "project-jr-consultoria.firebaseapp.com",
  projectId: "project-jr-consultoria",
  storageBucket: "project-jr-consultoria.appspot.com",
  messagingSenderId: "265789371678",
  appId: "1:265789371678:web:e465967c4fa908b0e8c50f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

// Adicionando o Storage no app firebase
const storage = getStorage(app);

export {storage};