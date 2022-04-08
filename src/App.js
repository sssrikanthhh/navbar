import Logo from './components/Logo';
import Links from './components/Links';
import Button from './components/Button';

import './App.css';

function App() {
  const linksContent = ['Services', 'Projects', 'About'];
  return (
    <div className="app">
      <div className="nav">
        <Logo />
        <Links linksArr={linksContent} />
        <Button text='Contact' />
      </div>
    </div>
  );
}

export default App;
