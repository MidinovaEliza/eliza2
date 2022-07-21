import logo from './logo.svg';
import './App.scss';
// /**
//  * redux react-redux redux-devtools-extension
//  * folder redux- папка (index js-store,reducer)
//  * react/index.js -<Provider></App></Provider>
//  * useSelector(()=>)
//  * useDispatch =dispatch({type:.../payload:...})
//  * switch case
//  *
//  * **/
//useSelector
//useDispatch
//blog.rocketkot.com

import {useDispatch, useSelector} from "react-redux";
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import Catalog from "./Catalog";
import Basket from "./Basket";
import Orders from "./Orders";

function App() {
  // const money = useSelector((state)=>state.money)
  //
  // const dispatch=useDispatch()
  // const getMoney=(money)=>{
  //   dispatch({type:"GET_MONEY",payload:money})
  //
  // }
  // const setMoney=(money)=>{
  //   dispatch({type:"SET_MONEY",payload:money})
  // }

    return (
    <div className="App">

    {/*<h1 style={{*/}
    {/*  marginTop:"40px"*/}
    {/*}}>{money}</h1>*/}
    {/* <button onClick={()=>getMoney(+prompt())}>Снять деньги</button>*/}
    {/* <button onClick={()=>setMoney(+prompt())}>Добавить</button>*/}
    {/* <button onClick={()=>dispatch({type:"DOUBLE_MONEY"})}>Умножить</button>*/}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/basket" element={<Basket/>}/>
          <Route path="/order" element={<Orders/>}/>}/>

      </Routes>


    </div>
  );
}

export default App;

