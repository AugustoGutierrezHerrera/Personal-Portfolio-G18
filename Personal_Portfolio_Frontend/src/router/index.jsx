import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage,AboutPage, FormPage } from "../pages";
import { AuthLayout, MainLayout, FormLayout } from "../layouts";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
        </Route>

        <Route element={<FormLayout/>} >
          <Route path="/form" element={< FormPage/>}></Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
