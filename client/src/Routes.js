import { BrowserRouter, Route} from 'react-router-dom'
import Main from './pages/Main'
import Bookings from './pages/Bookings'
import Book from './pages/Book'
import Checkout from './pages/Checkout'

const Routes = ({ teste }) => {
    return (
        <BrowserRouter>
            <>
                <Route path='/' exact component={Main}/>
                <Route path='/book' component={Book}/>
                <Route path='/checkout' component={Checkout}/>
                <Route path='/bookings' render={(props) => <Bookings {...props} teste={teste} />} />
            </>
        </BrowserRouter>
    )
}

export default Routes
