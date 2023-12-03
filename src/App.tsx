import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Add from './components/Admin/Add'
import List from './components/Admin/List'
import Edit from './components/Admin/Edit'
import HomePage from './components/HomePage'
import ProductPage from './components/Product'
import AdminLayout from './components/Admin/AdminLayout'
import SigninPage from './pages/auth/Signin'
import SignupPage from './pages/auth/Signup'

function App() {
    return (
        <div className=' max-w-4xl mx-auto'>

            <Routes>
                <Route path='/admin' element={<AdminLayout />}>
                </Route>
                <Route path='admin/products' element={<List />} />
                <Route path='/admin/products/add' element={<Add />} />
                <Route path='/admin/products/:id' element={<Edit />} />
            </Routes>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='products' element={<ProductPage />} />
                <Route path='/signin' element={<SigninPage />} />
                <Route path='/signup' element={<SignupPage />} />

            </Routes>
        </div >
    )
}

export default App
