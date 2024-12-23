import express from "express";
import admin from "firebase-admin";
import { createHash } from "crypto";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Firebase setup

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


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/submit", (req, res) => {
  const id1 = req.body.id;
  const userRef = ref(database, `users/${id1}`);
  get(userRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const userdata = snapshot.val();
        console.log("User Data:", userdata);
        res.render("error.ejs", { result: userdata });
      } else {
        console.log("No data available");
        res.render("error.ejs", { result: "No data available for this ID." });
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.render("index.ejs", { result: "Error fetching data." });
    });
});
app.post("/redirect", (req, res) => {
  res.redirect("/");
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
