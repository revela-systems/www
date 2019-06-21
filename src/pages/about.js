import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export default function About(props) {
    const { publicURL } = "/static/about.html";
    return (
        <Layout location={props.location} title='About'>
            <div dangerouslySetInnerHTML={{ __html: publicURL}} />        
        </Layout>
    )
}

export const query = graphql`
query {
    allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
        edges {
            node {
                publicURL
            }
        }
    }
}
`