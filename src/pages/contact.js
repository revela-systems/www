import React from 'react';
import Layout from '../components/Layout';

export default function Contact(props) {
    const { data } = props;
    const { markdownRemark } = data;
    return (
        <Layout  location={props.location} title='Contact'>
            <div dangerouslySetInnerHTML={{__html : markdownRemark.html }} />
        </Layout>
    )
}

export const query = graphql `
query {
    markdownRemark(frontmatter: {
            title: {
                eq: "contact"
            }
        }) {
        html
    }
}
`