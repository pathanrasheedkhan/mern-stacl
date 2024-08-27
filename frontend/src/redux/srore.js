/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authslice from "./authslice";
import jobSlice from "./jobSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
import companySlice from "./companySlice";
import applicationSlice from "./applicationSlice";

const persistConfig = {
    key : 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    auth: authslice,
    job: jobSlice,
    company:companySlice,
    application:applicationSlice
})
const  persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore ({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware ({
            serializableCheck :{
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})



// const store = configureStore ({
//     reducer: {
//          auth:authslice,
//          job:jobSlice

//     }
// });

export default store;