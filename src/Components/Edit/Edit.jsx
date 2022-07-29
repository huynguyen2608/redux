import React from "react";
import "./Edit.scss";

function Edit() {
  return (
    <div className="edit">
      <form>
        <section className="edit-container">
          <button className="close"> SAVE</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <label> Username</label>
            <input type="text" placeholder="Huy Nguyen" />
            <label>Age</label>
            <input type="text" placeholder="26" />
            <label> About</label>
            <textarea className="inut-about" />
          </div>
        </section>
      </form>
    </div>
  );
}

export default Edit;
