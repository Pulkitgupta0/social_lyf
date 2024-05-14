import React from "react";
import { Route, Routes } from "react-router-dom";
import "./global.css";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import Home from "./Home";
import AuthLayout from "./AuthLayout";
import RootLayout from "./RootLayout";
const App = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello</h1> */}
      <main className="flex h-screen">
        <Routes>

          <Route element={<AuthLayout/>}>
            {/* public route */}
          <Route path="/sign-up" element={<SignupForm />}/>
          <Route path="/sign-in" element={<SigninForm />}/>

          </Route>

          <Route element={<RootLayout/>}>
            {/* private route */}
           <Route index element={<Home/>}/>

          </Route>
          

          
        </Routes>
      </main>
    </>
  );
};

export default App;
