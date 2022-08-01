import React from "react";

function InputFields(props) {
  const { inputType, classStyle, data, setData, label } = props;

  return (
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          type="text"
          className={classStyle}
          placeholder={data}
          onChange={(e) => setData(e.target.calue)}
        />
      ) : (
        <input
          type="text"
          className={classStyle}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
}

export default InputFields;
