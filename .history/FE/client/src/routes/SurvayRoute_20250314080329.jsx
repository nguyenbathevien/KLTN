import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/survey/*" element={<SurveyLayout />}>
          <Route path="step1" element={<SurveyStep1 />} />
          <Route path="step2" element={<SurveyStep2 />} />
        </Route>
      </Routes>
    </Router>
  );
}
