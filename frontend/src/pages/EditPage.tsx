import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Tool} from "../model/Tool";

type APProps = {
    tool:Tool|undefined
    updateTool: (tool: Tool) => void
    loadDetailedTool: (id:string) => void
}

export default function AddPage(props: APProps) {

    const navigate = useNavigate();

    const {id} = useParams()

    useEffect(() => {
        if (id) {
            props.loadDetailedTool(id)
        }
    },[id])

    const [_id, setId] = useState(props.tool?._id)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [video, setVideo] = useState("")
    const [link, setLink] = useState("")
    const [quizQuestion, setQuizQuestion] = useState("")
    const [choiceA, setChoiceA] = useState("")
    const [choiceB, setChoiceB] = useState("")
    const [choiceC, setChoiceC] = useState("")
    const [correctChoice, setCorrectChoice] = useState("")
    const [incorrectChoice, setIncorrectChoice] = useState("")
    const [favourite, setfavourite] = useState(false)

    const updateTool = () => {

        const tool = {
            _id,
            name,
            image,
            description,
            video,
            link,
            quizQuestion,
            choiceA,
            choiceB,
            choiceC,
            correctChoice,
            incorrectChoice,
            favourite
        }

        props.updateTool(tool)
        navigate("/tools")
    }

    return (
        <>
            <div>
                <form>
                    <button onClick={() => navigate(`/tools/`)}>FireFighterTools</button>
                    <input onChange={event => setName(event.target.value)} value={name} type={"text"} placeholder={"Name"}/>
                    <input onChange={event => setImage(event.target.value)} type={"text"} placeholder={"Image"}/>
                    <input onChange={event => setDescription(event.target.value)} type={"text"} placeholder={"Description"}/>
                    <input onChange={event => setVideo(event.target.value)} type={"text"} placeholder={"Video"}/>
                    <input onChange={event => setLink(event.target.value)} type={"text"} placeholder={"Link"}/>
                    <input onChange={event => setQuizQuestion(event.target.value)} type={"text"} placeholder={"Quiz Question"}/>
                    <input onChange={event => setChoiceA(event.target.value)} type={"text"} placeholder={"Choice A"}/>
                    <input onChange={event => setChoiceB(event.target.value)} type={"text"} placeholder={"Choice B"}/>
                    <input onChange={event => setChoiceC(event.target.value)} type={"text"} placeholder={"Choice C"}/>
                    <input onChange={event => setCorrectChoice(event.target.value)} type={"text"} placeholder={"Correct Choice"}/>
                    <input onChange={event => setIncorrectChoice(event.target.value)} type={"text"} placeholder={"Incorrect Choice"}/>
                    {/*<input type={"checkbox"} onChange={event => setfavourite(event.target.value)} type={"text"} placeholder={"Incorrect Choice"}/>*/}
                    <button onClick={() => updateTool()}>Save</button>
                </form>
            </div>
        </>
    )
}