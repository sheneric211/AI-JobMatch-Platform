import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import { createRoot } from 'react-dom/client';
import { PersistGate } from "redux-persist/integration/react";
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);