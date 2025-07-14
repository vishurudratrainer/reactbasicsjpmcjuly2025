
import logo from '../../logo.svg';

const Header = ()=>( <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Learn React development
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in JPMC
        </a>
      </header>)

export default Header