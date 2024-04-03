
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";


const App = () => {
  const welcome = "Welcome!";
  const message = `My name is Anton and i currently reside in Vienna.
  I am capable of building end-to-end ds solution and passionate about
  bringing cool ideas to life`

  return (
    <div>
      <Header welcome={welcome} message={message} />
    </div>
  );
};

export default App;