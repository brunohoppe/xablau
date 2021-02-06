import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <section id="button-groups">
          <h1>
            Grupo de botões do materialui
          </h1>
          <div className="button-groups">
            <Button variant="contained">Home</Button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
