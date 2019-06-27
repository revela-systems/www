import React from "react";
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Logo from '../components/Logo';

export default function index(props) {
    const { data } = props;
    const { markdownRemark } = data;

    return (
        <Layout location={props.location} title='Revela'>
            <div dangerouslySetInnerHTML={{__html : markdownRemark.html }} />
            <Logo />
        </Layout>
    )
}

export const query = graphql `
query {
    markdownRemark(frontmatter: {
            title: {
                eq: "home"
            }
        }) {
        html
    }
}
`