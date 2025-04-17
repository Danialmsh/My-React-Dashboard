import React, {useContext, useEffect} from "react";
import {AdminContext} from "../../../context/adminLayoutContext";
import SidebarGroupTitle from "./SidebarGroupTitle";
import SidebarItem from "./SidebarItem";
import ToggleSideBarButton from "./ToggleSideBarButton";

const Index = () => {
    const {showSidebar} = useContext(AdminContext)
    const {ToggleShowSidebar} = useContext(AdminContext)

    return (
        <section id="sidebar_section" className={`${ToggleShowSidebar ? "d-flex" : ""}`}>
            <div className={`mini_sidebar collapsedd h-100 ${showSidebar ? "expanded" : null}  ${ToggleShowSidebar ? "expanded" : null}`}>
                <ToggleSideBarButton/>
                <span className='pooch'></span>
                <SidebarItem targetPath="/" icon="fas fa-tachometer-alt" title="داشبورد" pTitle="read_"/>
                <div className="sidebar_items_container">
                    {/* <!-- =================================== --> */}
                    <SidebarGroupTitle title="فروشگاه" pTitles={[
                        "read_categories", "read_products", "read_brands", "read_guaranties", "read_colors", "read_discounts"]}
                                       icon="fas fa-stream"
                    >
                        <SidebarItem targetPath="/categories" icon="fas fa-stream" title="مدیریت گروه محصول"
                                     pTitle="read_categories"/>
                        <SidebarItem targetPath="/products" icon="fas fa-cube" title="مدیریت محصول"
                                     pTitle="read_products"/>
                        <SidebarItem targetPath="/brands" icon="fas fa-copyright" title="مدیریت برندها"
                                     pTitle="read_brands"/>
                        <SidebarItem targetPath="/guaranties" icon="fab fa-pagelines" title="مدیریت گارانتی ها"
                                     pTitle="read_guarantees"/>
                        <SidebarItem targetPath="/colors" icon="fas fa-palette" title="مدیریت رنگ ها"
                                     pTitle="read_colors"/>
                        <SidebarItem targetPath="/discounts" icon="fas fa-percentage" title="مدیریت تخفیف ها"
                                     pTitle="read_discounts"/>
                    </SidebarGroupTitle>
                    {/* <!-- =================================== --> */}
                    <SidebarGroupTitle title="سفارشات و سبد" pTitles={["read_carts", "read_orders", "read_deliveries"]}
                                       icon="fas fa-shopping-basket">
                        <SidebarItem targetPath="/carts" icon="fas fa-shopping-basket" title="مدیریت سبد ها"
                                     pTitle="read_carts"/>
                        <SidebarItem targetPath="/orders" icon="fas fa-luggage-cart" title="مدیریت سفارشات"
                                     pTitle="read_orders"/>
                        <SidebarItem targetPath="/deliveries" icon="fas fa-truck-loading" title="مدیریت نحوه ارسال"
                                     pTitle="read_deliveries"/>
                    </SidebarGroupTitle>
                    {/* <!-- =================================== --> */}
                    <SidebarGroupTitle title="کاربران و همکاران"
                                       pTitles={["read_users", "read_roles", "read_permissions"]} icon="fas fa-users">
                        <SidebarItem targetPath="/users" icon="fas fa-users" title="مشاهده کاربران"
                                     pTitle="read_users"/>
                        <SidebarItem targetPath="/roles" icon="fas fa-user-tag" title="نقش ها" pTitle="read_roles"/>
                        <SidebarItem targetPath="/permissions" icon="fas fa-shield-alt" title="مجوز ها"
                                     pTitle="read_permissions"/>
                    </SidebarGroupTitle>
                    {/* <!-- =================================== --> */}
                    <SidebarGroupTitle title="ارتباطات" pTitles={["read_questions", "read_comments"]}
                                       icon="fas fa-question-circle">
                        <SidebarItem targetPath="/questions" icon="fas fa-question-circle" title="سوال ها"
                                     pTitle="read_questions"/>
                        <SidebarItem targetPath="/comments" icon="fas fa-comment" title="نظرات" pTitle="read_comments"/>
                    </SidebarGroupTitle>
                </div>
            </div>
        </section>
    );
};

export default Index;