import {Routes,Route,Link} from 'react-router-dom'
import Todos from './Todos'

const Nav =()=>(
    <div>
        <Routes>
            <Route path='/' element={<Todos/>}/>
        </Routes>

    </div>
)
export default Nav

