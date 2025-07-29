import React, {useContext} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import { useHasPermission } from "../../../hook/permissionsHook";
import {AdminContext} from "../../../context/adminLayoutContext";

const SidebarItem = ({icon, title, targetPath, pTitle}) => {
    const hasPerm = useHasPermission(pTitle);
    const { setToggleShowSidebar } = useContext(AdminContext);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        setToggleShowSidebar(false);
        navigate(targetPath);
    };

  return hasPerm && (
      <NavLink to={targetPath}
               onClick={handleClick}
               className="py-1 text-start pe-4 sidebar_menu_item siebar_items"
               title={title}>
          <i className={`ms-3 icon ${icon} text-light`}></i>
          <span className="hiddenable no_wrap font_08">{title}</span>
      </NavLink>
  );
};

export default SidebarItem;
