import React, { useState } from "react";
import InputFields from "../InputFields/InputFields";
import "./Edit.scss";

function Edit() {
  const avaUrl = [
    "https://luctuyetkytuyetme.files.wordpress.com/2016/11/39f7c0fef312c912a3df83e524a843f2.jpg?w=500",
    "https://scontent.fhan1-1.fna.fbcdn.net/v/t1.6435-9/187630093_1722657237939055_2130349168208622629_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=9V5cY4pJ8EYAX-F1WTr&_nc_ht=scontent.fhan1-1.fna&oh=00_AT_zGCBh1FfUoroFYwJbV53qpk_OZs7c7996eKVQiikAfg&oe=630ACB02",
    "https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/218563513_1763404963864282_8329414795757030802_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=sWWZveAx3rwAX-9uEBY&_nc_ht=scontent.fhan1-1.fna&oh=00_AT_9xu97WAZCQOl-DYhylGp9vvVFrMzqaxPpCwEjq8uPyg&oe=62E7D393",
    "https://scontent.fhan1-1.fna.fbcdn.net/v/t1.6435-9/205428568_1753344748203637_929102006802413089_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=ERCyJhum4MsAX_Ct3rB&_nc_ht=scontent.fhan1-1.fna&oh=00_AT9HnDb5QeQRn6so6kXLgwCMmhzu00gXBZcDxs-tSNBiyQ&oe=6309AC81",
    "https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/225009547_363566228497412_3502516753284657669_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=_AVYHUeR1ZgAX8Xl2ya&_nc_ht=scontent.fhan1-1.fna&oh=00_AT8nJooUWzjebp4XvxEU__jDhbPrFD_dLXo3BJjq9CI2fA&oe=62E8AA47",
    "https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/227465988_365514898302545_8212534985258868967_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=6yXBwctW0_cAX8pGPGo&_nc_ht=scontent.fhan1-1.fna&oh=00_AT_AbbfP2nGzb8bXFD4npB5AOA-DqXQ9FpDfdLn8NdZi5A&oe=62E8E3C8",
    "https://scontent.fhan1-1.fna.fbcdn.net/v/t1.6435-9/187918349_1728348410703271_3986409347716749070_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=5MglhLVY-HEAX-XdtSz&_nc_ht=scontent.fhan1-1.fna&oh=00_AT-gJtf6D0rRyDUspCjtE3FiJ6Rj4shNteqXzqPE8OwNvw&oe=630869E2",
    "https://scontent.fhan1-1.fna.fbcdn.net/v/t1.6435-9/180838898_1710166315854814_690473755770647488_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=su4TVUKdBLcAX9YoeYB&_nc_ht=scontent.fhan1-1.fna&oh=00_AT_X6mKQy9v10jflos2OMgSS4NYRsmuZE_0_PkIa2A5myQ&oe=630A70CE",
  ];
  const [name, setName] = useState("Daniel");
  const [age, setAge] = useState(26);
  const [about, setAbout] = useState("I'm a software engineer");
  const [theme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(
    "https://luctuyetkytuyetme.files.wordpress.com/2016/11/39f7c0fef312c912a3df83e524a843f2.jpg?w=500"
  );

  return (
    <div className="edit">
      <form>
        <section className="edit-container">
          <button className="close"> SAVE</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <InputFields label="Huy Nguyen"/>
            {/* <label> Username</label>
            <input
              type="text"
              placeholder="Huy Nguyen"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Age</label>
            <input
              type="text"
              placeholder="26"
              onChange={(e) => setAge(e.target.value)}
            />
            <label> About</label>
            <textarea
              className="inut-about"
              onChange={(e) => setAbout(e.target.value)}
            /> */}
            <label>Profile Picture</label>
            <div className="input-image-container">
              {avaUrl.map((img, index) => {
                return (
                  <>
                    <img onClick={(e)=>setUrl(e.target.src)} key={index} className="input-image" src={img} alt="" />
                  </>
                );
              })}
            </div>
            <div className="theme-container">
              <label>Theme</label>
              <input type="color" className="theme-color" defaultValue="#ffffff" onChange={(e)=>setTheme(e.target.value)}/>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Edit;
