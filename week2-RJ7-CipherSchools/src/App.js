
// import './App.css';
// import Name from './components/Name';
// import SignUpForm from './components/SignUpForms';
// import SumNumbers from './components/SumNumbers';
// import Test from './components/Test';


// function App() {
//   return (
//     <div className="App">
//    <Name />
//    <Test/>
//    <SumNumbers/>
//    <SignUpForm />
//    <Validators />
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter, Routers, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForms";
import Header from "./components/Headers";
import TaskScreen from "./components/TakScreen";
import CounterComponent from "./components/CounterComponents";
import Name from "./components/Name";
import Photos from "./components/Photos";
import SumNumbers from "./components/SumNumbers";
import SampleRenderProps from "./components/SampleRenderProps";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Route>
        <Route path={"/"} element={<h1>This is on Home Page</h1>} />
        <Route path={"/contact"} element={<h1>This is on Contact Page</h1>} />
        <Route path={"/about"} element={<h1> This is on About Page</h1>} />
        <Route path={"/signup"} element={<SignUpForm} />
        <Route  path={"sum"} element={<SumNumbers />} />
      </Route>
      <Route path={"/tasks"} element={<TaskScreen />} />
      <Route path={"/counter"} element={<CounterComponent />} />
      <Route path={"/photos"} element={<Photos />} />
      <Route path={"/test"} element={<TestApp /> } />
      <Route path={"/sample"} element={<SampleRenderProps />} />
      </BrowserRouter>
      <TaskScreen />
      <CounterComponent />
      <Name />
      <SumNumbers />
      <Validators/>
      <Test />
      <Photos/>
      
    </div>
  );
};

export default App;