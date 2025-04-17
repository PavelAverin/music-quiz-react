import { Routes, Route } from "react-router";
import MainPage from "./Components/MainPage";
import QuestionPage from "./Components/QuestionPage";
import SongPage from "./Components/SongPage";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/song" element={<SongPage />} />
      </Routes>
    </>
  );
}
