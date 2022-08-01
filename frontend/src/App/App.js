import React, { useState } from "react";
import { useSelector } from "react-redux";
import Edit from "../Components/Edit/Edit";
import Header from "../Components/Header/Header";
import Footer from "../Footer/Footer";
import "./App.scss";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state)=>state.user.error);

  return (
    <div className="app">
      {isEdit ? <Edit setIsEdit={setIsEdit}/> : <Header setIsEdit={setIsEdit} />}
      {pending && <p className="loading"> Loading...</p>}
      {!isEdit && error && (
        <p className="error"> Error when fetching data from server!!!</p>
      )}
      <Footer isOpenPost = {isOpenPost} setIsOpenPost = {setIsOpenPost}/>
    </div>
  );
}

export default App;
