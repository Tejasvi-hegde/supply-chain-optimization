import { initializeApp } from "firebase/app";

import { getDatabase ,ref,set} from "firebase/database";
const firebase=initializeApp(
    {
        apiKey: "AIzaSyD6DZ15tpBzzx-2VfzM7vcCv6OflrLCT9k",
        authDomain: "agriculture-supply-chain.firebaseapp.com",
        databaseURL: "https://agriculture-supply-chain-default-rtdb.firebaseio.com",
        projectId: "agriculture-supply-chain",
        storageBucket: "agriculture-supply-chain.firebasestorage.app",
        messagingSenderId: "61353264965",
        appId: "1:61353264965:web:34a99d6a28e417ec8ba02c",
        measurementId: "G-XWDYD3QBPX"
      }
);
const id=36;
function Writeuserdata(ph,conductivity,moisture,temperature){
    const db=getDatabase();
    const reference=ref(db,'users/'+id);
    set(reference,{
        PH:ph,
        Conductivity:conductivity,
        moisture:moisture,
        temperature:temperature
    });
}
Writeuserdata("6.8","310mc","54%","25");