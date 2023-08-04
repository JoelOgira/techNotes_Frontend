import { Link } from "react-router-dom";

const DashHeader = () => {
    return (
        <header>
            <div className="flex justify-between items-center">
                <Link to="/dash/notes">
                    <h1>techNotes</h1>
                </Link>
                <nav className="flex justify-between items-center">
                    <div className=""></div>
                    <div className=""></div>
                    <div className="">
                        <p>Current User:</p>
                        <p>Status:</p>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default DashHeader;