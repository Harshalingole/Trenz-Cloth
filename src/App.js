// import logo from "./logo.svg";
// import "./App.css";
// import "./index.scss";
// import "./categories.styles.scss";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import SignIn from "./components/routes/sign_in/sign_in.component";
import SignUpForm from "./components/routes/sign-up-form/sign-up-component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
}

export default App;
