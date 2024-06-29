import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { budgetReducer } from "./budget/budgetSlice";
import sessionStorage from "redux-persist/lib/storage/session";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfig = {
    key: "root",
    storage: sessionStorage,
};

const rootReducer = combineReducers({
    budgetReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

// export default store;
export { store, persistor };
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

/**
 * serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "giftcardTrades/giftCardTradesFetched",
        ],
        // Ignore these field paths in all actions
        ignoredActionPaths: [
          "meta.arg",
          "payload.0.createdAt",
          "giftcardTradesReducer.giftcardTrades.0.createdAt",
        ],
        // Ignore these paths in the state
        ignoredPaths: [
          "payload.0.createdAt",
          "giftcardTradesReducer.giftcardTrades.0.createdAt",
        ],
      },
 */
