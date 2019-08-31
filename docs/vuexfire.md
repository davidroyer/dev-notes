# VuexFire

```js
import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { fireStoreDB } from "boot/firebase";

const Articles = fireStoreDB.collection("articles");

Vue.use(Vuex);

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

    updateArticle: firestoreAction((context, payload) => {
      return Articles.update(payload);
    })
  }
});
```
