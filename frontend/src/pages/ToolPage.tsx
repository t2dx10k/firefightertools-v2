import {Tool} from "../model/Tool";
import ToolGallery from "../components/ToolGallery";
import {Link, useNavigate} from "react-router-dom";

type TPProps = {
    tools: Tool[]
}

export default function ToolPage(props: TPProps) {

    const navigate = useNavigate()

    return (
        <>
            <div className={"ToolPage"}>
                <button onClick={() => navigate(`/`)}>FireFighterTools</button>
                <ToolGallery tools={props.tools}/>

                <form>
                    <Link to={"/add/"}>
                        <button type="button">Add</button>
                    </Link>
                </form>

            </div>
        </>
    )
}