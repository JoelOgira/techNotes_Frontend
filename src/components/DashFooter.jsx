import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const DashFooter = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const thisYear = new Date().getFullYear();
    const onGoHomeClicked = () => navigate('/dash');

    let goHomeButton = null;
    if (pathname !== '/dash') {
        goHomeButton = (
            <button
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} className="text-3xl" />
            </button>
        )
    }

    return (
        <div className="sticky top-full flex flex-col">
            <div className="mb-3">
                <hr className="border" />
            </div>
            <footer className="flex flex-row space-x-5 justify-center items-center py-6">
                {goHomeButton}
                <p>Copyright &copy; techNotes {thisYear}</p>
            </footer>
        </div>
    )
}

export default DashFooter;