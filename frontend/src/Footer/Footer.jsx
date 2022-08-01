import React from 'react';
import "./Footer.scss";

function Footer(props) {
    const {isOpenPost, setIsOpenPost} = props;

  return (
    <div className='footer' style={{backgroundColor:`${isOpenPost ? "#2196f3" : "#e53935"}`}}>
        <div className='footer-title' onClick={() => setIsOpenPost(!isOpenPost)}>
            {isOpenPost ? "+" : "x"}
        </div>
    </div>
  )
}

export default Footer