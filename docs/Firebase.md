# Firebase

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

```js
import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { fireStoreDB } from "boot/firebase";

Vue.use(Vuex);

const Articles = fireStoreDB.collection("articles");

export default new Vuex.Store({
  state: {
    articles: []
  },

  mutations: {
    ...vuexfireMutations
  },

  actions: {
    bindArticles: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("articles", Articles);
    }),

    deleteArticle: firestoreAction((context, articleId) => {
      Articles.doc(articleId).delete();
    }),

    addArticle: firestoreAction((context, payload) => {
      return Articles.add(payload);
    }),

    /**
     * @example payload
     * {
     *  title: 'Updated Title'
     * }
     *
     */
    updateArticle: firestoreAction((context, payload) => {
      return Articles.update(payload);
    })
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
});
```
