import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <>
            <section className="flex flex-col space-y-6">
                <h1 className="text-2xl font-semibold font-mono pt-8 pb-2">
                    Welcome to Zephyrus Labs!
                </h1>

                <hr className="border" />

                <p>Located in Beautiful Elysium City, Zephyrus provides the best specialists for your augmentation needs.</p>

                <div className="flex flex-col">
                    <p>Zephyrus Labs</p>
                    <p>555 Augmentation Verizon</p>
                    <p>Elysium City, ISS 12345</p>
                    <p>(666) 666-666</p>
                </div>

                <p>Compadre: G14</p>
            </section>

            <section className="top-full sticky">
                <hr className="border" />
                <p className="py-6">
                    <Link to='/login'>
                        Employee login
                    </Link>
                </p>
            </section>
        </>
    )

    return content;
}

export default Public;