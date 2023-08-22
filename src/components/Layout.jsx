import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="mx-auto container px-5 md:w-3/4 md:px-0 h-[100dvh]">
            <Outlet />
        </div>
    )
}

export default Layout;