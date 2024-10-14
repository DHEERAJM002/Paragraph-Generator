import { useState } from "react"
import { BackDrop } from "./components/BackDrop";
import { ParagraphGenerator } from "./components/ParagraphGenerator";
import { RenderParagraph } from "./components/RenderParagraph";

function App() {
  const [color,setColor]=useState('white');
  const [words,setWords]=useState(0);
  const [inputVal,setInputVal]=useState(0);
  return <div>
    <style>{`body{background-color:${color};}`}</style>
    <BackDrop setColor={setColor}></BackDrop>
    <ParagraphGenerator setWords={setWords} setInputVal={setInputVal} inputVal={inputVal}></ParagraphGenerator>
    <RenderParagraph words={words}></RenderParagraph>
  </div>
}

export default App
