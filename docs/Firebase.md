# Firebase

hi

## Config Setup Example

```js
import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
const firebaseDb = firebaseApp.database();
const firebaseStorage = firebaseApp.storage();

export { firebaseAuth, firebaseDb, firebaseStorage };
```

## Image Upload

```js
const storageRef = firebaseStorage.ref();

storageRef
  .child(`images/${name}`)
  .put(file)
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(url => {
    console.log(url);
    this.lastUploadUrl = url;
  })
  .catch(console.error);
```

## VuexFire
