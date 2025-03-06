import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./auth.css";  // Thêm từ Incoming Change
import "./swiper.css"; // Thêm từ Incoming Change
import App from "./App.jsx";
import ScrollToTop from "./components/common/ScrollToTop";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { navigateHistory } from "./utils/setting";
import { Provider } from "react-redux";
import {Store} from "./redux/Store"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <HistoryRouter history={navigateHistory}>
        <App />
        <ScrollToTop />
      </HistoryRouter>
    </Provider>
  </StrictMode>
);
