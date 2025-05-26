import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Callback from "./pages/Callback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}
export default App;
