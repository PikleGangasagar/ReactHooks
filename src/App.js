import logo from './logo.svg';
import './App.css';
import FunctionComp from './components/FunctionComp';
import ClassComp from './components/ClassComp';
import MyDetailsComp from './components/MyDetailsComp';
import CompanyDetails from './components/CompanyDetails';
import MyStateComp from './components/MyStateComp';
import MyEventComp from './components/MyEventComp';
import MyCounterComp from './components/MyCounterComp';
import ConditinalRenComp from './components/ConditinalRenComp';
import ParentComp from './components/ParentComp';
import MyImagesComp from './components/MyImagesComp';
import MySalaryComp from './components/MySalaryComp';
import MySalaryComp2 from './components/MySalaryComp2';
import HOC from './components/HOC';
import UseStateComp from './Hooks/UseStateComp';
import UseEffectComp from './Hooks/UseEffectComp';
import FormValComp from './components/FormValComp';
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
      {/* <h1>Welcome to CDAC</h1> 
      <FunctionComp myName="Gangasagar Pikle" myPost = "Software Developer"/>
      <ClassComp myPRN="240343420025" myCLG = "CDAC"></ClassComp>
      <MyDetailsComp name="Gangasagar Pikle" email = "pikalegangasgar@gmail.com" contact= "7385421698" address="Latur,Maharashtra" />
      <CompanyDetails cpName="CDAC" cpEmail="ycpaitmumbai@gmail.com" cpContact="7468541620" cpAddress="Nariman Point, Mumbai." />
      <MyStateComp company ="Cybage" address = "India" ></MyStateComp>
      <MyEventComp />
      <MyCounterComp/>
      <ConditinalRenComp/>
      <ParentComp/>
      <MyImagesComp/> 
      <MySalaryComp/>
      <MySalaryComp2/>
      <HOC/>
      <UseStateComp/>
      <UseEffectComp/>
      <FormValComp/> */}
    </div>
  );
}

export default App;
