import React, { Fragment } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';
import { globalStyles } from '../global-styles';
import styled from '@emotion/styled';
import Header from '../components/header';
import { font, gap, columnWidth, color } from './../style';
import { Helmet } from 'react-helmet';

const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                        tags
                        preview
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;

export const Container = styled.div`
    width: ${columnWidth};

    margin: 0 auto;
    margin-bottom: ${gap.xxxl};

    & h1 {
        margin-top: 0;
    }

    @media (max-width: ${columnWidth}) {
        width: 100%;

        margin-bottom: ${gap.xxl};
        padding: 0 ${gap.l};
    }
`;

const More = styled.div`
    margin-top: ${gap.xs};

    ${font.size.l};

    @media (max-width: ${columnWidth}) {
        ${font.size.m};
    }
`;

const ArticleMeta = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: ${gap.xs};

    @media (max-width: ${columnWidth}) {
        margin-bottom: ${gap.xxs};
    }
`;

const DateContainer = styled.span`
    margin-right: ${gap.m};

    ${font.size.s};
    color: ${color.grey[700]};

    @media (max-width: ${columnWidth}) {
        margin-right: ${gap.xs};
        ${font.size.xs};
    }
`;

const Tag = styled.div`
    padding: ${gap.xxxs} ${gap.xs};

    color: ${color.grey[700]};
    ${font.size.s};

    border: 1px solid ${color.grey[500]};
    border-radius: 14px;

    &:not(:last-child) {
        margin-right: ${gap.xxs};
    }

    @media (max-width: ${columnWidth}) {
        ${font.size.xs};

        &:not(:last-child) {
            margin-right: ${gap.xxxs};
        }
    }
`;

const Tags = styled.div`
    display: flex;
`;

const Article = styled.article`
    &:not(:last-child) {
        margin-bottom: ${gap.xxxl};
    }

    h2 {
        margin-top: 0;
    }

    @media (max-width: ${columnWidth}) {
        &:not(:last-child) {
            margin-bottom: ${gap.xxl};
        }
    }
`;

const dateCompareFunction = (a, b) => {
    const firstDate = new Date(Date.parse(a));
    const secondDate = new Date(Date.parse(b));

    return secondDate - firstDate;
}

class BlogPage extends React.Component {
    renderArticle = data => {
        const tags = data.frontmatter.tags.split(',');

        const date = new Date(Date.parse(data.frontmatter.date));
        const formatter = new Intl.DateTimeFormat();

        return (
            <Fragment>
                <ArticleMeta>
                    <DateContainer>{formatter.format(date)}</DateContainer>
                    <Tags>
                        {tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Tags>
                </ArticleMeta>
                <h2>{data.frontmatter.title}</h2>
                <p>{data.frontmatter.preview}</p>
                <More>
                    <Link to={`/blog${data.fields.slug}`}>Read more ↬</Link>
                </More>
            </Fragment>
        );
    };

    render() {
        return (
            <Container>
                <Global styles={globalStyles} />
                <Helmet>
                    <title>Jane's blog</title>
                </Helmet>
                <StaticQuery
                    query={query}
                    render={data => {
                        const articles = data.allMarkdownRemark.edges.sort(
                            (firstArticle, secondArticle) => {
                                return dateCompareFunction(
                                    firstArticle.node.frontmatter.date,
                                    secondArticle.node.frontmatter.date
                                );
                            }
                        );

                        return (
                            <Fragment>
                                <Header />
                                <main>
                                    {articles.map(
                                        (article, index) => (
                                            <Article key={index}>
                                                {this.renderArticle(article.node)}
                                            </Article>
                                        ),
                                    )}
                                </main>
                            </Fragment>
                        )
                    }}
                />
            </Container>
        );
    }
}

export default BlogPage;
