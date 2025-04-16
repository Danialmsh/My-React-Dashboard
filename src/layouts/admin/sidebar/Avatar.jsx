import React from "react";

const Avatar = ({name , imagePath}) => {
  return (
    <div className="avatar_li">
      <span className="avatar_box">
        <img
          className="w-100 h-100 rounded-circle"
          src={imagePath}
        />
      </span>
      <div className="sidebar_avatar_name text-center hiddenable">{name}</div>
    </div>
  );
};

export default Avatar;
