import { Link } from "react-router-dom";

const DashHeader = () => {
    return (
        <header>
            <div className="flex justify-between items-center px-5 md:px-0 mb-3 py-8">
                <Link to="/dash/notes">
                    <h1 className="font-bold text-2xl underline">techNotes</h1>
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