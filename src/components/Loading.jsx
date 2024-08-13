import '../App.css'
import ripples from '/ripples.svg';

const Loading = () => {
  return (
    <>
    <div className="svg-container">
         <img src={ripples} alt="My SVG" className="my-svg" />
    </div>
    </>
  )
}


export default Loading
