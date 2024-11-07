import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomeCard from "./Components/Question1/WelcomeCard";
import LikeButton from "./Components/Question2/LikeButton";
import LoginStatus from "./Components/Question3/LoginStatus";
import TaskList from "./Components/Question4/TaskList";
import ProductList from "./Components/Question5/ProductList";
import EventRegistrationForm from "./Components/Question6/Q1/EventRegistrationForm";
import UserRegistrationForm from "./Components/Question6/Q3/UserRegistrationForm";
import DropDown from "./Components/Question7/DropDown";
import UserData from "./Components/Question8/Q1/UserData";
import NavBar from "./NavBar";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<h1>React Lab</h1>} />
            <Route path="/welcome" element={<WelcomeCard />} />
            <Route path="/likebutton" element={<LikeButton />} />
            <Route path="/loginstatus" element={<LoginStatus />} />
            <Route path="/tasklist" element={<TaskList />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route
              path="/eventregistrationform"
              element={<EventRegistrationForm />}
            />
            <Route
              path="/userregistrationform"
              element={<UserRegistrationForm />}
            />
            <Route path="/dropdown" element={<DropDown />} />
            <Route path="/userData" element={<UserData />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
