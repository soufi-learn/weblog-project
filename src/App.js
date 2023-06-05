import React from "react";
import HomePage from "./components/homePage";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Blog from "./components/shared/blog";
import Author from "./components/shared/author";
import ScrollToTop from "./components/shared/scrollToTop";
import LovelyTextProvider from "./context/lovelyTextProvider";

function App() {
  return (
    <LovelyTextProvider>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="weblogs" element={<HomePage />} />
        <Route path="weblogs/:slug" element={<Blog />} />
        <Route path="authors/:slug" element={<Author />} />
        <Route path="*" element={<Navigate to="/weblogs" />} />
      </Routes>
      <Footer />
    </LovelyTextProvider>
  );
}

export default App;
