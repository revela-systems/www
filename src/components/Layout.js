import React from 'react';
import styled from 'tachyons-components';

const Frame = styled('div')`
outline pa2 mv3
`

export default function Layout(props) {
    return (
        <Frame>
            {props.children}
        </Frame>
    )
}
