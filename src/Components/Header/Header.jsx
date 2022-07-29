import React from "react";
import "./Header.scss";

function Header(props) {
  const { setIsEdit } = props;
    const handleCloseEdit = () => {
        setIsEdit(true)
    }
  return (
    <div>
      <header>
        <div className="info-container">
          <div className="info-edit" onClick={handleCloseEdit}>edit</div>
          <img
            className="info-avata"
            src="https://luctuyetkytuyetme.files.wordpress.com/2016/11/39f7c0fef312c912a3df83e524a843f2.jpg?w=500"
            alt=""
            width={80}
            height={120}
          />
          <div className="info-username"> Huy Nguyen</div>
          <div className="info-age">26 years old</div>
          <div className="info-about"> I'm a software engineer</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
