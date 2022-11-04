import {Tool} from "../model/Tool";
import ToolGallery from "../components/ToolGallery";
import {Link} from "react-router-dom";

type TPProps = {
    tools: Tool[]
}

export default function ToolPage(props: TPProps) {

    return (
        <>
            <div className={"ToolPage"}>
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