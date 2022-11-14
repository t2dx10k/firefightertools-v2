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

    const {tool, addNewTool} = useTool();


    return (
        <div className="App">
          <HashRouter>
              <Routes>
                  <Route path={"/"} element={<MainPage/>}/>
                  <Route path={"/tools/"} element={<ToolPage tools={tool}/>}/>
                  <Route path={"/add/"} element={<AddPage addTool={addNewTool}/>}/>
                  <Route path={"/details/:id"} element={<DetailPage/>}/>
                  <Route path={"/edit/:id"} element={<EditPage/>}/>
              </Routes>
          </HashRouter>
        </div>
    );
}

export default App;
