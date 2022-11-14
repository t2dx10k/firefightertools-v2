import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

export default function EditPage() {

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
            <Link to={"/details/" + tool._id}>
                <button>FireFighterTools</button>
            </Link>
            <h1>Test</h1>
            <h1>{tool._id}</h1>
        </div>
    )
}