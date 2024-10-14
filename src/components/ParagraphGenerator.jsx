

export function ParagraphGenerator({inputVal,setWords,setInputVal}){
    return <div style={{display:'flex',justifyContent:'center',paddingTop:'10px',gap:'10px'}}>
        <input onChange={(e)=>{
            setInputVal(e.target.value);
        }}></input>
        <button onClick={()=>{
            setWords(Number(inputVal))
        }}>Generate</button>
    </div>
}