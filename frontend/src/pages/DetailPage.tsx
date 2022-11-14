import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default function DetailPage() {

    const [tool, setTool] = useState<any>({});

    const {id} = useParams()

    useEffect(() => {

        const fetchToolByID = async (id: string | undefined) => {
            if (id === undefined) {
                return;
            }
            const res = await axios.get(`/api/fft/${id}`)
            return res.data;
        }
        fetchToolByID(id).then((x) => setTool(x)).catch(console.error)

    },[])

    return (
        <div>
            <Link to={"/tools/"}>
                <button>FireFighterTools</button>
            </Link>
            <h1>{tool.name}</h1>
            <h1>{tool._id}</h1>
            <h1>{tool._id}</h1>
            <Link to={"/edit/" + tool._id}>
                <button>Edit</button>
            </Link>
        </div>
    )
}