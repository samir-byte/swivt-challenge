import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Landing, Details, Error } from './pages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/repository/:owner/:repo" element={<Details/>} />
      <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
