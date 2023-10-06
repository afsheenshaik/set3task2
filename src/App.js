import './App.css';
import { Header,Footer} from './components/header';
import { C1 } from './components/c1';
function App() {
  return (
    <div>
      <Header name="anna"/>
      <C1 age="10"/>
      <C1 age="20"/>
      <C1 age="30"/>
      <C1 age="40"/>
      <C1 age="50"/>
      <Footer gender="male"/>
    </div>
  );
}

export default App;