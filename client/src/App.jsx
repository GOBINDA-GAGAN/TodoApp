import { BrowserRouter, Routes, Route, } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ScreenPage from "./pages/ScreenPage";
import TaskList from "./pages/TaskList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ScreenPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/all-task" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
