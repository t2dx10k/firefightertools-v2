import {Tool} from "../model/Tool";

type QuizPProps = {
    tool:Tool
}

export default function (props:QuizPProps){

    const quiz = props.tool.quizQuestion

    return (
        <>
            <h1>Test</h1>
            <p>
                {quiz}
            </p>
        </>
    )
}