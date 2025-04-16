import React, {useState} from "react";
import { useHasPermission } from "../../../hook/permissionsHook";
import Collapse from 'react-bootstrap/Collapse';

const SidebarGroupTitle = ({ title , pTitles , icon , children}) => {
    const [open, setOpen] = useState(false);
    const hasPerm = useHasPermission(pTitles);

  return hasPerm && (
      <>
          <div onClick={() => setOpen(!open)}
               aria-controls="example-collapse-text"
               aria-expanded={open}
               className="py-3 text-start d-flex justify-content-start px-4 no_pointer no_hover siebar_items py-1">
              <i className={`ms-2 icon ${icon} text-light`}></i>
              <span className="hiddenable no_wrap group_sidebar_title ms-2 font_09">{title}</span>
              {open ?
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                       className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                       className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                  </svg>
              }
          </div>
          <Collapse in={open}>
              <div id="example-collapse-text">
                  {children}
              </div>
          </Collapse>
      </>
  );
};

export default SidebarGroupTitle;
