import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {Tool} from "../model/Tool";

type ToolPProps = {
    tool:Tool|undefined
    loadDetailedTool: (id:string) => void
}

export default function DetailPage(props: ToolPProps) {

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            props.loadDetailedTool(id)
        }
    },[id])

    return(
            <>
                <button onClick={() => navigate(`/tools/`)}>FireFighterTools</button>
                <h1>{props.tool?.name}</h1>

                <img/>
                {props.tool?._id ? <button onClick={() => navigate(`/edit/`)}>Edit</button> : <p>No valid Tool was given</p>}
            </>
    )
}