import { HashRouter, Route, Routes } from 'react-router-dom'
import App from '../pages/App/'
import Login from '../pages/Login/'
import Home from '../pages/Home/'
import User from '../pages/User/'
import Game from '../pages/Game'
import Question from '../pages/Question'

const BaseRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/user" element={<User />}></Route>
                    <Route path="/game" element={<Game />}></Route>
                    <Route path="/question" element={<Question />}></Route>
                </Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default BaseRouter
