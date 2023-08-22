import { Link } from "react-router-dom";

const Welcome = () => {

    const date = new Date();
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);

    return (
        <section className="flex flex-col space-y-6 justify-start items-start">
            <p className="max-w-xs">{today}</p>
            <h1 className="text-2xl font-semibold underline">Welcome</h1>
            <p><Link to="/dash/notes">View techNotes</Link></p>
            <p><Link to="/dash/users">View users</Link></p>
        </section>
    )
}

export default Welcome;