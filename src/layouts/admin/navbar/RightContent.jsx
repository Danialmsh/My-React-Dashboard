import React, {useContext} from "react";
import {AdminContext} from "../../../context/adminLayoutContext";
import ToggleSideBarButton from "../sidebar/ToggleSideBarButton";

const Rightcontent = () => {
    const {ToggleShowSidebar,setToggleShowSidebar} = useContext(AdminContext);

    return (
        <div className="right_content h-100">
            <a className="navbar-brand h-100" href="/">
                <img src="/assets/images/logo.png" className="h-100" />
            </a>
            <button className="ToggleSideBarBtn2"
                    onClick={() => setToggleShowSidebar(!ToggleShowSidebar)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black"
                     className="bi bi-justify-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>
        </div>
    );
};

export default Rightcontent;
