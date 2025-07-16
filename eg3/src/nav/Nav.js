import {Routes,Route} from 'react-router-dom'
import Counter from '../components/Counter'

const Nav =()=>{
    return(<div>
        <Routes>
            <Route path='/' element={<Counter/>}/>
        </Routes>
    </div>)

}
export default Nav

