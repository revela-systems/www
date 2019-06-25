import React from 'react'
import { Link } from 'gatsby';
import styled from 'tachyons-components';

const Nav = styled('div')`
tr fr mt3
`

const Title = styled('h1')`
helvetica b f2 pv0 mv0
`

const HeaderFrame = styled('section')`
bb mb2 pb5 w-100 h2
`
const linkStyle = 'ml3 helvetica b no-underline black'

const activeLinkStyle = {
    borderBottom: '2px solid',
};

export default function Header(props) {
    return (
        <HeaderFrame>
            <div className="fl">
                <Title>Revela</Title>
                {/* <Title>{props.title}</Title> */}
            </div>
            <Nav>
                <Link className={linkStyle} activeStyle={activeLinkStyle} to="/">Home</Link>
                <Link className={linkStyle} activeStyle={activeLinkStyle} to="/about">About</Link>
                <Link className={linkStyle} activeStyle={activeLinkStyle} to="/contact">Contact</Link>
            </Nav>
        </HeaderFrame>
    )
}
