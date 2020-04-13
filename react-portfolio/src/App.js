import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/footer';
import AboutPage from './pages/AboutPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ians Portfolio',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Welcome',
        subTitle: 'Be awesome',
        text: 'Checkout my work'
      },
      about: {
        title: 'About Me'

      },
      contact: {
        title: 'Get in touch'
      }
    }

    
  }


render() {
  return (
    <Router>
      <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <NavbarBrand>Ian Clark</NavbarBrand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className= "ml-auto" >
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path = "/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        <Route path = "/about" exact render={() => <AboutPage title={this.state.about.title} /> } />
        <Route path = "/contact" exact render={() => <ContactPage title={this.state.contact.title} /> } />

        <Footer />




      </Container>
    </Router>
  )
}
}




export default App;
