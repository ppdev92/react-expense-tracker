import { App } from "./App";
import { store, persistor } from "./store/index";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>
);
