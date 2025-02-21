import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Github from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";
import Contact from "./components/Contact/ConatctUs.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* Default route */}
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="github" element={<Github />} />
      <Route path="user" element={<User />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
