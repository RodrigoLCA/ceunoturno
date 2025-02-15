import { Button } from "@/components/ui/button.tsx";
import StarsWrapper from "./components/starsWrapper";

function App() {
  return (
    <><div className="flex flex-col items-center justify-center min-h-screen text-white sky-bg">

      {/* <svg id="Swipe-horizontal_1" data-name="Swipe horizontal 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <path className="hand-x" d="M139.93,113.56l-41.12-6.93V76.08a9.25,9.25,0,0,0-9.25-9.25h0a9.25,9.25,0,0,0-9.25,9.25v57.36L71,122.65c-3.61-3.61-8.44-3.89-13.08,0,0,0-7.24,5.84-3.83,9.25l34,34h42.63a9.25,9.25,0,0,0,9.07-7.43l6.82-34.09A9.28,9.28,0,0,0,139.93,113.56Z"/>
        <g className="swipe-horizontal">
          <path className="line-horizontal" d="M70.85,42c19.69-12.46,37,0,37,0"/>
          <polyline className="arrow-left" points="76.6 46.01 68.37 43.43 68.38 43.41 70.96 35.18"/>
          <polyline className="arrow-right" points="100.21 44.66 108.43 42.08 108.43 42.06 105.85 33.84"/>
        </g>
      </svg>

      <div className="floating-info">
          <Button className="px-6 py-3 text-lg text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Quero Meu Astro
          </Button>
      </div> */}

      <StarsWrapper/>
      <div className="bottom-bar relative w-screen h-[50px] invisible"></div>
      <div className="bottom-bar fixed w-screen h-[50px] bg-red-500">
        <div className="fixed h-[45px] w-full left-0 bottom-bar-body flex justify-center">
          {/* <p>ASTROS DISPONÍVEIS (GARANTA LOGO O SEU)</p> */}
          <Button className="px-6 py-3 text-lg text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Criar Homenagem
          </Button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
