import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import styled from 'tachyons-components';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Layout from '../components/Layout';

const Frame = styled('div')`
mw8 center pa3
`

const Nav = styled('div')`
tr fr w-50 mt2
`

const Title = styled('h1')`
helvetica b f3 pv0 mv0
`

const Header = styled('section')`
bb mb2 pb1 w-100 h2
`

const linkStyle = 'mr2'

export default function index() {
    return (
        <Frame>
            <Router>
                <Header>
                    <div className="fl w-50">
                        <Title>Revela</Title>
                    </div>
                    <Nav>
                        <Link className={linkStyle} to="/">Home</Link>
                        <Link className={linkStyle} to="/about">About</Link>
                        <Link className={linkStyle} to="/contact">Contact</Link>
                    </Nav>
                </Header>

                <Layout>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                </Layout>
            </Router>
        </Frame>
    )
}
