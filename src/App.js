import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Menu from './components/Menu'
import Home from './pages/Home'

const NoMatch = () => <h1>Not Found</h1>

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Menu />
        <h1>Harry Potter</h1>
      </header>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={< />} />
          <Route path="dashboard" element={< />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
