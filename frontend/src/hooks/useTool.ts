import {useEffect, useState} from "react";
import axios from "axios";
import {NewTool} from "../model/NewTool";

export default function useTool() {

    const [tool, setTool] = useState([]);

    useEffect(
        () => {
            getAllTools()
        }
    )

    const getAllTools = () => {
        axios.get("/api/fft")
            .then((response) => {
                return response.data
            })
            .then((tool) => {
                setTool(tool)
            })
            .catch(() => console.error())
    }

    const addNewTool = (tool:NewTool) => {
        axios.post("/api/fft", tool)
            .catch((error) => console.log(error))
            .then(getAllTools)
    }


    return {tool, addNewTool}
}