import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6DZ15tpBzzx-2VfzM7vcCv6OflrLCT9k",
  authDomain: "agriculture-supply-chain.firebaseapp.com",
  databaseURL: "https://agriculture-supply-chain-default-rtdb.firebaseio.com",
  projectId: "agriculture-supply-chain",
  storageBucket: "agriculture-supply-chain.firebasestorage.app",
  messagingSenderId: "61353264965",
  appId: "1:61353264965:web:34a99d6a28e417ec8ba02c",
  measurementId: "G-XWDYD3QBPX",
};

const appp = initializeApp(firebaseConfig);
const database = getDatabase(appp);

const userRef = ref(database, "users/33");

get(userRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log("User Data:", snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
