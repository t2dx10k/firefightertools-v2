import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import useTool from "./hooks/useTool";
import ToolPage from "./pages/ToolPage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";

function App() {

    const {tool, tools, loadDetailedTool, addNewTool, updateTool } = useTool();

    // @ts-ignore
    return (
        <div className="App">
          <HashRouter>
              <Routes>
                  <Route path={"/"} element={<MainPage/>}/>
                  <Route path={"/tools/"} element={<ToolPage tools={tools}/>}/>
                  <Route path={"/add/"} element={<AddPage addTool={addNewTool}/>}/>
                  <Route path={"/details/:id"} element={<DetailPage tool={tool} loadDetailedTool={loadDetailedTool}/>}/>
                  <Route path={"/edit/"} element={<EditPage tool={tool} updateTool={updateTool} loadDetailedTool={loadDetailedTool}/>}/>
                  <Route path={"/quiz/"}/>
              </Routes>
          </HashRouter>
        </div>
    );
}

export default App;