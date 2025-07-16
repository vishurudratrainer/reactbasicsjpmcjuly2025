
import {Routes,Route,Link} from 'react-router-dom'
import Todos from '../components/Todos'
const Nav =()=>{
    return(<div>
        <Link to={"/"}>Todos</Link>
        <Routes>
            <Route path='/' element={<Todos/>}/>
        </Routes>
    </div>)

}
export default Nav