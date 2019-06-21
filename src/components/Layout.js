import React from 'react';
import Header from '../components/Header';
import styled from 'tachyons-components';

const BodyFrame = styled('div')`
 pv2 mv3
`
const BigFrame = styled('div')`
mw8 center pa3
`

export default function Layout(props) {
    return (
        <BigFrame>
            <Header title={props.title} />
            <BodyFrame>
                {props.children}
            </BodyFrame>
        </BigFrame>
    )
}
