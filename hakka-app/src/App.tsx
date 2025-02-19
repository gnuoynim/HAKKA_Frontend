import React from 'react';
import './reset.css';
import MokkojiMain from './pages/MokkojiMain';
import InsertPlaceForm from "./component/InsertPlaceForm";
import MyPlaceList from "./component/MyPlaceList";


function App() {
  return (
    <div className="App">
      <MokkojiMain></MokkojiMain>
      <InsertPlaceForm />
      <MyPlaceList />
    </div>
  );
}

export default App;
