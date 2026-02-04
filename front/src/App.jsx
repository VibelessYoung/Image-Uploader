import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import Content from "./components/Content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileUpload />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
