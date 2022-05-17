import React from "react";

const InputTypes = ({ type, name, onChange, id }) => {
  return (
    <div>
      <input type={type} name={name} onChange={onChange} id={id} />
    </div>
  );
};

export default InputTypes;
