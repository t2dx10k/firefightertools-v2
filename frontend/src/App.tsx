import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import useTool from "./hooks/useTool";
import ToolPage from "./pages/ToolPage";

function App() {

    const {tool} = useTool();

    return (
        <div className="App">
          <HashRouter>
              <Routes>
                  <Route path={"/"} element={<MainPage/>}/>
                  <Route path={"/tools/"} element={<ToolPage tools={tool}/>}/>
              </Routes>
          </HashRouter>
        </div>
    );
}

export default App;
