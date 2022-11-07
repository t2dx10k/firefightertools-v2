import {Tool} from "../model/Tool";
import {Link} from "react-router-dom"

type TCProps = {
    tool: Tool;
}

export default function ToolCard(props: TCProps) {



    return (
        <div className={"toolcard"}>
            
            <Link to={"/details"}>
                <button><h6>{props.tool.name}</h6></button>
            </Link>
            <br/>
            <Link to={"/details"}>
                <button><h6>{props.tool.image}</h6></button>
            </Link>
            <h6>{props.tool.description}</h6>
            <h6>{props.tool.link}</h6>

        </div>
    )
}