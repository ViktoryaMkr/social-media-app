import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import uploadSlice from "./uploadSlice";
import postSlice from "./postSlice";


import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";

function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if(serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch(e) {
        console.log(e);
        return undefined;
    }
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const persistedState = loadFromLocalStorage();

const store = configureStore({
    reducer: {
        auth: authSlice,
        sharePost: uploadSlice,
        post: postSlice
    },
    preloadedState : persistedState,
    
}, composeEnhancers(applyMiddleware(thunk)))


store.subscribe(() => saveToLocalStorage(store.getState()));

export default store