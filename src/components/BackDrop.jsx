export function BackDrop({setColor}){
    return <div style={{display:'flex',justifyContent:'center',gap:'10px'}}>
    <button onClick={()=>{
      setColor('red')
    }}>Red</button>
    <button onClick={()=>{
      setColor('green')
    }}>Green</button>
    <button onClick={()=>{
      setColor('blue')
    }}>Blue</button>
    <button onClick={()=>{
      setColor('yellow')
    }}>Yellow</button>
  </div>
}