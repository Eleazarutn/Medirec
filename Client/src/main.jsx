import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./SinglePagesOutComp/Login";
import { IndexDashboard } from "./ComponentsIndex/IndexDashboard";
import { Register } from "./SinglePagesOutComp/Register";
import { User } from "./pages/User";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexDashboard />}></Route>
        <Route path="login" element={<Login />}>
          {" "}
        </Route>
        <Route path="register" element={<Register />}>
          {" "}
        </Route>
        <Route path="user" element={<User />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
<App>

</App>
);
