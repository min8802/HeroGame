import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Mint from "./pages/Mint";

const App:FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/mint" element={<Mint/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;