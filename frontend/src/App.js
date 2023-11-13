import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ImageScreen from './screens/ImageScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'
import ProfileScreen from './screens/ProfileScreen'

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <main className='py-3'>
        <Container>

          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/images/:id' element={<ImageScreen />} />
            <Route path='/users/login' element={<LoginScreen />} />
            <Route path='/users/register' element={<RegisterScreen />} />

            <Route path='' element={<PrivateRoute />} >
              <Route path='/users/profile' element={<ProfileScreen />} />
            </Route>
          </Routes>

        </Container>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App