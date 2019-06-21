import React from 'react'
import { Link } from 'gatsby';
import styled from 'tachyons-components';

const Nav = styled('div')`
tr fr w-50 mt2
`

const Title = styled('h1')`
helvetica b f3 pv0 mv0
`

const HeaderFrame = styled('section')`
bb mb2 pb1 w-100 h2
`
const linkStyle = 'mr2'

export default function Header(props) {
    return (
        <HeaderFrame>
            <div className="fl w-50">
                <Title>{props.title}</Title>
            </div>
            <Nav>
                <Link className={linkStyle} to="/">Home</Link>
                <Link className={linkStyle} to="/about">About</Link>
                <Link className={linkStyle} to="/contact">Contact</Link>
            </Nav>
        </HeaderFrame>
    )
}
