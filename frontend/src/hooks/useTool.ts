import {useEffect, useState} from "react";
import axios from "axios";
import {NewTool} from "../model/NewTool";
import {Tool} from "../model/Tool";

export default function useTool() {

    const [tool, setTool] = useState<Tool>()
    const [tools, setTools] = useState([]);

    useEffect(
        () => {
            getAllTools()
        },[]
    )

    const getAllTools = () => {
        axios.get("/api/fft")
            .then((response) => {
                return response.data
            })
            .then((tool) => {
                setTools(tool)
            })
            .catch(() => console.error())
    }

    const addNewTool = (tool:NewTool) => {
        axios.post("/api/fft", tool)
            .catch((error) => console.log(error))
            .then(getAllTools)
    }

    const updateTool = (tool:Tool) => {
        axios.put("/api/fft", tool)
            .catch((error) => console.error(error))
            .then(getAllTools)
    }

    const loadDetailedTool = (id:string) => {
        axios.get("/api/fft/" + id)
            .then(response => response.data)
            .then(tool => setTool(tool))
            .catch((error) => console.error(error))
    }
    return {tool, tools, addNewTool, loadDetailedTool, updateTool}
}