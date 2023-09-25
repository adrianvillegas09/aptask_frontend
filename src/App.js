import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./global.css";
import Chatbot from "./components/chatbot";

function App() {
  return (
    <Router>
      <div className="w-full h-full">
        <Routes>
          <Route exact path="/" Component={Chatbot} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
