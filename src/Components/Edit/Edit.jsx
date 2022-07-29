import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputFields from "../InputFields/InputFields";
import { update } from "../StoreRedux/Slice/UserSlice";
import { SpinnerCircularFixed } from "spinners-react";
import { avaUrl } from "../../Constants/constants";

function Edit(props) {
  const { setIsEdit } = props;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState(user.themeColor);
  const [url, setUrl] = useState(user.avaUrl);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      themeColor: theme,
    };

    //call API
    
    //test setTimeout
    setIsSubmitting(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(update(updateUser));
        resolve(true);
        setIsEdit(false);
      }, 2000);
    });
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <InputFields label="Username" data={user.name} setData={setName} />
            <InputFields label="Age" data={user.age} setData={setAge} />
            <InputFields
              label="About"
              inputType="textarea"
              classStyle="input-about"
              data={user.about}
              setData={setAbout}
            />
            <label>Profile Picture</label>
            <div className="input-image-container">
              {avaUrl.map((img, index) => {
                return (
                  <img
                    onClick={(e) => setUrl(e.target.src)}
                    key={index}
                    className="input-image"
                    src={img}
                    alt=""
                  />
                );
              })}
            </div>
            <div className="theme-container">
              <label>Theme</label>
              <input
                type="color"
                className="theme-color"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
            {isSubmitting ? (
              <button className="close flex" disabled={true}>
                <SpinnerCircularFixed size={20} thickness={177} speed={117} color="rgba(57, 71, 172, 1)" secondaryColor="rgba(57, 172, 127, 0.07)" />
                SAVE
              </button>
            ) : (
              <button className="close"> SAVE</button>
            )}
          </div>
        </section>
      </form>
    </div>
  );
}

export default Edit;
