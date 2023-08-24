import { Link } from "react-router-dom";

const DashHeader = () => {
    return (
        <header>
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-3 py-6">
                    <Link to="/dash">
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
                <div className="mb-8">
                    <hr className="border" />
                </div>
            </div>
        </header>
    )
}

export default DashHeader;