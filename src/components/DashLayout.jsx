import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

const DashLayout = () => {
    return (
        <div className="h-[100dvh]">
            <DashHeader />
            <div className="">
                <Outlet />
            </div>
            <DashFooter />
        </div>
    )
}

export default DashLayout;