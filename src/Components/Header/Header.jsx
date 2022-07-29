import React from "react";
import { useSelector } from "react-redux";

function Header(props) {
  const user = useSelector((state) => state.user);
  console.log(user.themeColor);

  const { setIsEdit } = props;
  const handleCloseEdit = () => {
    setIsEdit(true);
  };
  return (
    <div>
      <header
        style={{
          backgroundColor: `${user.themeColor}`,
          backgroundImage: `linear-gradient( 180deg, ${user.themeColor} 2%, ${user.themeColor} 35%, #181818 100%)`,
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleCloseEdit}>
            EDIT
          </div>
          <div className="info">
            <img className="info-avata" src={user.avaUrl} alt="" />
            <div>
              <div className="info-username">Name: {user.name}</div>
              <div className="info-age"> Age: {user.age}</div>
            </div>
          </div>

          <div className="info-about"> About: {user.about}</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
