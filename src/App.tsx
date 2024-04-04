
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Education from './components/Education';


const App = () => {
  const welcome = "Welcome!";
  const message = `My name is Anton and i currently reside in Vienna.
  I am capable of building end-to-end ds solution and passionate about
  bringing cool ideas to life`
  const degrees = [
    {
      degree: "MSc in Data Science"
    },
    {
      degree: "MSc in Buisness Administration"
    },
    {
      degree: "MSc in Accounting and Taxation"
    }
  ]

  return (
    <div>
      <Header welcome={welcome} message={message} />
      <Education degreeList={degrees} />
    </div>
  );
};

export default App;