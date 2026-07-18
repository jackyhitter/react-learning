import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-95 shadow-md hover:shadow-xl hover:brightness-110"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-95 shadow-md hover:shadow-xl hover:brightness-110"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-95 shadow-md hover:shadow-xl hover:brightness-110"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("#A483C2")}
          className="outline-none px-4 py-1 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-95 shadow-md hover:shadow-xl hover:brightness-110"
          style={{backgroundColor: "#A483C2"}}
          >Lavender</button>
        </div>
      </div>
    </div>
  )
}

export default App
