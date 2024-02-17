import NavBar from './components/NavBar.jsx';
import Logs from './pages/Logs.jsx';
import Users from './pages/Users.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route path="/logs" element={<Logs />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
