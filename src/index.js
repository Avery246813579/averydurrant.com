import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppLayout from "./layouts/app-layout";
import {Provider} from "react-redux";
import {setupStore} from "./redux";
import {BrowserRouter} from "react-router-dom";
import Pages from "./pages";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={setupStore()}>
            <BrowserRouter>
                <AppLayout>
                    <Pages/>
                </AppLayout>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
