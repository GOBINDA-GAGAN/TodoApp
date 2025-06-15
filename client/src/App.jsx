import { BrowserRouter, Routes, Route, } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ScreenPage from "./pages/ScreenPage";
import TaskList from "./pages/TaskList";
import ShowTask from "./pages/ShowTask";

const App = () => {
  return (
    <BrowserRouter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ScreenPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/all-task" element={<TaskList />} />
        <Route path="/showTask/:task_id" element={<ShowTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
