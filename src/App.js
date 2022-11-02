import './App.css';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import Crumb from "./components/Crumb/Crumb"

function App() {  
  return (
    <div className="App">
       <Breadcrumbs>
          <Crumb href="/"> Home </Crumb>
          <Crumb href="/living"> Living Room </Crumb>
          <Crumb href="./living/coutch"> Coutches </Crumb>
          <Crumb href="./living/coutch/sectional"> Sectionals </Crumb>
       </Breadcrumbs>
    </div>
  );
}

export default App;
