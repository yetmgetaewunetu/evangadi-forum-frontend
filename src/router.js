import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import SingleQuestion from "./components/SingleQuestion/SingleQuestion";
import { useAuthStore } from "./store/useAuthStore";
import { useQuestionStore } from "./store/useQuestionStore";

const Routing = () => {
  const { user } = useAuthStore();
  const { isWritingAnswer } = useQuestionStore();
  return (
    <div
      className={`flex flex-col min-h-screen ${
        isWritingAnswer && "bg-white opacity-20"
      }`}
    >
      <Router>
        <Header />
        <div className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Main />} />
            <Route
              path="/single/:qid"
              element={user ? <SingleQuestion /> : <Main />}
            />
            <Route path="/home" element={user ? <Home /> : <Main />} />
          </Routes>
        </div>
      </Router>

      {/* <Footer /> */}
    </div>
  );
};
export default Routing;
