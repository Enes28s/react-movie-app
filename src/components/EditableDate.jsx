import React, { useState } from "react";
import "../styles/EditableDate.css";

function EditableDate({ watchDate, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(watchDate);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      onUpdate(value);
    }
  };
  return (
    <div className="editable">
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <p onClick={handleClick}>{value}</p>
      )}
    </div>
  );
}

export default EditableDate;
