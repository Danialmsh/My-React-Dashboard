import React, {useContext, useEffect} from "react";
import Leftcontent from "./LeftContent";
import Rightcontent from "./RightContent";
import {AdminContext} from "../../../context/adminLayoutContext";

const Index = () => {
    const {showSidebar} = useContext(AdminContext)

    return (
        <nav className={`navbar fixed-top navbar-dark top_navbar py-0 ${showSidebar ? "with_sidebar" : null}`}>
            <div className="container-fluid h-100 pe-0">

                <Rightcontent/>

                <Leftcontent/>


            </div>
        </nav>
    );
};

export default Index;
