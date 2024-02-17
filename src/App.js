import NavBar from './components/NavBar.js';

// bg-zinc-900

function App() {
  return (
    <div className="wrapper">
      <header className='header'>
        <div className="nav__container">
          <h3 className="nav__title">License Control</h3>
          <div className="nav__links">
            <a href="#">Logs</a>
            <a href="#">Users</a>
            <a href="#">Add</a>
          </div>
        </div>
      </header>

    </div>

  );
}

export default App;
