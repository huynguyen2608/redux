import React, { useState } from "react";
import Edit from "../Components/Edit/Edit";
import Header from "../Components/Header/Header";
import "./App.scss";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="app">
      {/* {isEdit ? <Edit /> : <Header setIsEdit={setIsEdit} />} */}
      <Edit/>
    </div>
  );
}

export default App;
