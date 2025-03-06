<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollToTop from './components/common/ScrollToTop'
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { navigateHistory } from './utils/setting'
import { Provider } from "react-redux"
import { Store } from './redux/Store'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <HistoryRouter history={navigateHistory}>
        <App />
        <ScrollToTop />
      </HistoryRouter>
    </Provider>
  </StrictMode>,
)
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./auth.css";
import "./swiper.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
>>>>>>> 495de59f44ed06424c181e3f9efb8a5c2a3236e9
