import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import useTool from "./hooks/useTool";
import ToolPage from "./pages/ToolPage";
import AddPage from "./pages/AddPage";

function App() {

    const {tool, addNewTool} = useTool();

    return (
        <div className="App">
          <HashRouter>
              <Routes>
                  <Route path={"/"} element={<MainPage/>}/>
                  <Route path={"/tools/"} element={<ToolPage tools={tool}/>}/>
                  <Route path={"/add/"} element={<AddPage addTool={addNewTool}/>}/>
              </Routes>
          </HashRouter>
        </div>
    );
}

export default App;
