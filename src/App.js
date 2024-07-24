import './App.css';
import CatNav from './Components/CatNav';
import MainContainer from './Components/MainContainer';
import TopNav from './Components/TopNav'; /** if we name the file as index.js and the component name is same as 
                                           the folder name then we don't have to write TopNAv two times*/

function App() {
  return (
    <div className="App">
     <TopNav/>
     <CatNav/>
     <MainContainer/>
    </div>
  );
}

export default App;
