import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="mx-auto container md:w-3/4">
            <Outlet />
        </div>
    )
}

export default Layout;