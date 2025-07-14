import { useNavigate } from "react-router-dom";

export default function NavEg(){
    const navigate=useNavigate()
    const goToCalc =()=>navigate("/calculator")

    return(<div>
        <button onClick={goToCalc}>Go to calculator</button>
    </div>)

}