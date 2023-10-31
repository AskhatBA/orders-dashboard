import { Routes, Route } from "react-router-dom";

import { Dashboard } from "@/screens/dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
