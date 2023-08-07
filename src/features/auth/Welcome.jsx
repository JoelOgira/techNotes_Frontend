import { Link } from "react-router-dom";

const Welcome = () => {

    const date = new Date();
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);

    return (
        <section className="flex flex-col justify-start items-start bg-opacity-20">
            <p>{today}</p>
            <h1 className="text-2xl font-semibold text-center underline">Welcome</h1>
            <p><Link to="/dash/notes">View techNotes</Link></p>
            <p><Link to="/dash/users">View user Settings</Link></p>
        </section>
    )
}

export default Welcome;