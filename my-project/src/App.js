import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from './components/Products'
import ErrorPage from './components/pages/ErrorPage'
import { UserContext } from './UserContext'
import LoggedIn from './components/pages/LoggedIn.tsx'


function App() {
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            className="logo"
                            src= "/images/games-21604.png"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link id="NavLink" to={'/'}>
                                Home
                            </Link>
                            <Link id="NavLink" to={'/about'}>
                                About
                            </Link>
                            <Link id="NavLink" to={'/LoggedIn'}>
                                Login
                            </Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            <UserContext.Provider value={'det här är useContext :) glöm inte att logga in'}>

                <Routes>
                    <Route path="/" element={<Home message="this is props:)"/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products/:id" element={<Products />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/LoggedIn" element={<LoggedIn />} />
                </Routes>
            </UserContext.Provider>
        </div>
    )
}

export default App
