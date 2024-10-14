import { memo } from "react";

const arroFWords=["quilt", "notebook", "elephant", "penguin", "star", "river", "yacht", "grape", "whale", "tree", "kite", "hat", "apple", "violin", "dog", "zebra", "island", "banana", "umbrella", "orange"];
export const RenderParagraph=memo(({words})=>{
    let para="";
    let count=words;
    for(var i=0;i<count;i++){
      para+=arroFWords[Math.floor(Math.random(arroFWords.length-1)*10)]+' ';
    }
    return <div>
      <p>{para}</p>
    </div>
  })