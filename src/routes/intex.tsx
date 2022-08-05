import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/Home";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
