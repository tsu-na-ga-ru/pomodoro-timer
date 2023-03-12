import React from 'react'
import { createRoot } from 'react-dom/client';

import {StateProvider} from "./context/stateProvideer.jsx";
import App from './App.jsx'
import '../index.css'

import reducer, {initialState} from "./reducer.js";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <StateProvider reducer={reducer} initialState={initialState}>
            <App />
        </StateProvider>
    </React.StrictMode>
);

