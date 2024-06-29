"use client";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./configureStore";
import { PersistGate } from "redux-persist/integration/react";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Provider store={store}>
      {isMounted ? (
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      ) : (
        <>{children}</>
      )}
    </Provider>
  );
}

export default ReduxProvider;

/**
 * <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
 * */
