import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';
import { globalStyles } from '../global-styles';
import Header from '../components/header';
import { font, gap, columnWidth, color } from './../style';
import { Container } from './../pages/blog';
import { Helmet } from 'react-helmet';

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                tags
            }
        }
    }
`;

const ArticleMeta = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: ${gap.s};

    @media (max-width: ${columnWidth}) {
        margin-bottom: ${gap.xs};
    }
`;

const DateContainer = styled.span`
    margin-right: ${gap.l};

    ${font.size.m};
    color: ${color.grey[700]};

    @media (max-width: ${columnWidth}) {
        margin-right: ${gap.s};

        ${font.size.s};
    }
`;

const Tag = styled.div`
    padding: ${gap.xxxs} ${gap.s};

    color: ${color.grey[700]};
    ${font.size.m};

    border: 1px solid ${color.grey[500]};
    border-radius: 16px;

    &:not(:last-child) {
        margin-right: ${gap.xs};
    }

    @media (max-width: ${columnWidth}) {
        margin-right: ${gap.s};

        ${font.size.s};

        &:not(:last-child) {
            margin-right: ${gap.xxs};
        }
    }
`;

const Tags = styled.div`
    display: flex;
`;

class ArticlePage extends React.Component {
    render() {
        const article = this.props.data.markdownRemark;
        const tags = article.frontmatter.tags.split(',');

        const date = new Date(Date.parse(article.frontmatter.date));
        const formatter = new Intl.DateTimeFormat();

        return (
            <Container>
                <Helmet>
                    <title>Jane's blog — {article.frontmatter.title}</title>
                </Helmet>
                <Global styles={globalStyles} />
                <Header />
                <main>
                    <article>
                        <ArticleMeta>
                            <DateContainer>{formatter.format(date)}</DateContainer>
                            <Tags>
                                {tags.map((tag, index) => (
                                    <Tag key={index}>{tag}</Tag>
                                ))}
                            </Tags>
                        </ArticleMeta>
                        <h1>{article.frontmatter.title}</h1>
                        <div
                            dangerouslySetInnerHTML={{ __html: article.html }}
                        />
                    </article>
                </main>
            </Container>
        );
    }
}

export default ArticlePage;
