import { NavLink } from "react-router-dom";

const NotFound = () => {


    return (
        <section className="not-found">
            <div className="wrapper">
                <div>
                    <h1>Lost in the clouds</h1>
                    <NavLink to = "/"><button>Return Back</button></NavLink>
                </div>
            </div>
        </section>
    );
}
export default NotFound;