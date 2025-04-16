import { createContext, useState } from "react";

export const AdminContext = createContext({
    showSidebar: false,
    setShoeSidebar: ()=>{},
    ToggleShowSidebar: false,
    setToggleShowSidebar: ()=>{}
});

const AdminContextContainer = ({children})=>{
    const [showSidebar , setShoeSidebar] = useState(false)
    const [ToggleShowSidebar , setToggleShowSidebar] = useState(false)

    return (
        <AdminContext.Provider value={{
            showSidebar,
            setShoeSidebar,
            ToggleShowSidebar,
            setToggleShowSidebar
        }}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextContainer;