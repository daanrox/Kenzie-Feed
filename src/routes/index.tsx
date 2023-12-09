import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Dashboard } from '../pages/Dashboard'
import { AllNews } from '../pages/AllNews'
import { PostPage } from '../pages/PostPage'
import { EditPost } from '../pages/EditPost'

export const RoutesMain = () => {
    return(        
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/news' element={<AllNews/>}></Route>
            <Route path='/posts/:postid' element={<PostPage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/posts-edit' element={<EditPost/>}></Route>
        </Routes>
        
    )
}