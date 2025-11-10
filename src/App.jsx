import { useState } from 'react'
import ReactImageZoom from 'react-image-zoom';
import ServiceSlider from './ServiceSlider';
import Memo from './components/Memo';

function App() {
  const [count, setCount] = useState(0)

  const props = { width: 400, height: 250, zoomWidth: 500, zoomPosition: 'bottom', img: "https://malaman.github.io/react-image-zoom/example/1.jpg" };
  return (

    <div>
      {/* <ReactImageZoom {...props} /> */}
      {/* <ServiceSlider/> */}
      <Memo/>
    </div>


  )
}

export default App
