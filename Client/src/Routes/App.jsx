import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../AccessComponents/Login";
import { IndexDashboard } from "../IndexDashComponents/IndexDashboard";
import { Register } from "../AccessComponents/Register";
import { IndexAdmin } from "../AdminComponents/IndexAdmin";
import { UserstableAdmin } from "../AdminComponents/UserstableAdmin";
import { DoctorTableAdmin } from "../AdminComponents/DocotorTableAdmin";
import { ProductTableAdmin } from "../AdminComponents/ProductsAdmin";


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

        <Route path="admin" element={<IndexAdmin />}></Route>
        <Route path="adminUsers" element={<UserstableAdmin/>}></Route>
        <Route path="adminDoctors" element={<DoctorTableAdmin></DoctorTableAdmin>}></Route>
        <Route path="adminProducts" element={<ProductTableAdmin></ProductTableAdmin>}/>
      </Routes>
    </BrowserRouter>
  );
}
 