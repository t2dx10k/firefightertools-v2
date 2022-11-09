import {Link, useNavigate} from "react-router-dom";

export default function MainPage() {



    return (
        <>
            <div className={"MainPage"}>
                <h1>FireFighterTools</h1>
                <form>
                    <Link to="/tools/">
                        <button type="button">Tools</button>
                    </Link>

                    <Link to={"/quiz/"}>
                        <button type="button">Quiz</button>
                    </Link>

                    <Link to={"/login"}>
                        <button type="button">Login</button>
                    </Link>
                </form>
            </div>
        </>
    )
}