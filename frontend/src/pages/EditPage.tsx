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
            <form>
            <Link to={"/details/" + tool._id}>
                <button>FireFighterTools</button>
            </Link>
            <h1>{tool.name}</h1>
            <h1>{tool.image}</h1>
            <h1>{tool.description}</h1>
            <h1>{tool.video}</h1>
            <h1>{tool.link}</h1>
            <h1>{tool.quizQuestion}</h1>
            <h1>{tool.choiceA}</h1>
            <h1>{tool.choiceB}</h1>
            <h1>{tool.choiceC}</h1>
            <h1>{tool.correctChoice}</h1>
            <h1>{tool.incorrectChoice}</h1>
            <h1>{tool.favourite}</h1>
            {/*<button onSubmit={}></button>    */}
            </form>
        </div>
    )
}