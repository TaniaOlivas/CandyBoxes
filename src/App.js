import './App.css';
import Header from './Header';
import CandyContainer from './CandyContainer';

function App() {
  const headingTitle = "Candy Boxes"
  return (
    <div className="App">
      <Header headingTitle={headingTitle} />
      <CandyContainer />
    </div>
  );
}

export default App;
