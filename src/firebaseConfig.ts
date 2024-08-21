// firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABRzMCUClHvXqrIvSBuCIp0L7ytXJnzSg",
  authDomain: "central-lfg.firebaseapp.com",
  projectId: "central-lfg",
  storageBucket: "central-lfg.appspot.com",
  messagingSenderId: "176121641470",
  appId: "1:176121641470:web:ac80ef596bd039e38868af"
};

const app = initializeApp(firebaseConfig);

export default app;
