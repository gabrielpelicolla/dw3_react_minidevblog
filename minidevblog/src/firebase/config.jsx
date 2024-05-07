import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDnjpGF2dlOkF0UDouD1pwaxsbgjE6bRTs",
  authDomain: "minidevblogfecchio.firebaseapp.com",
  databaseURL: "https://minidevblogfecchio-default-rtdb.firebaseio.com",
  projectId: "minidevblogfecchio",
  storageBucket: "minidevblogfecchio.appspot.com",
  messagingSenderId: "914063189191",
  appId: "1:914063189191:web:bb2bf2be7e145b9102cae2",
  measurementId: "G-J9069JEZR7"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}