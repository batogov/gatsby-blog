import React from 'react';
import { Global } from '@emotion/core';
import { globalStyles } from '../global-styles';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { columnWidth, gap, font, color } from './../style';
import { Helmet } from 'react-helmet';

const Container = styled.div`
    width: ${columnWidth};
    margin: ${gap.xxxl} auto ${gap.xxxl} auto;

    @media (max-width: ${columnWidth}) {
        margin: ${gap.xxl} 0 ${gap.xxl} 0;

        width: 100%;
        padding: 0 ${gap.l};
    }
`;

const Intro = styled.p`
    margin-bottom: ${gap.m};
    margin-top: 0;

    ${font.size.xxl};

    @media (max-width: ${columnWidth}) {
        margin-bottom: ${gap.s};

        ${font.size.xl};
    }
`;

const Header = styled.div``;

const Avatar = styled.img`
    width: ${gap.xxxxl};
    height: ${gap.xxxxl};
    border-radius: 50%;

    @media (max-width: ${columnWidth}) {
        width: ${gap.xxxl};
        height: ${gap.xxxl};
    }
`;

const Links = styled.ul`
    ${font.size.l};

    display: block;

    margin: 0;
    padding: 0;

    li {
        list-style: none;
        display: inline-block;
        padding: 0;
        margin-bottom: 0;
    }

    li:not(:last-child) {
        margin-right: ${gap.xs};

        &:after {
            content: '·';
            display: inline-block;
            margin-left: ${gap.xs};
            color: ${color.grey[500]}
        }
    }

    @media (max-width: ${columnWidth}) {
        ${font.size.m};

        &:not(:last-child) {
            margin-right: ${gap.xxs};

            &:after {
                margin-left: ${gap.xxs};
            }
        }
    }
`;

class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <Global styles={globalStyles} />
                <Helmet>
                    <title>Jane — designer and developer from Berlin</title>
                </Helmet>
                <main>
                    <Header>
                        <Avatar src="./avatar.png" />
                        <h1>Hi there! My name is Jane.</h1>
                    </Header>
                    <Intro>
                        I'm a 21 years old designer and developer from Berlin. Currently I'm working on a secret product. I also like sharing my experience and random thoughts in the <Link to="/blog/">blog</Link>.
                    </Intro>
                    <Links>
                        <li><a href="#">mail</a></li>
                        <li><a href="#">facebook</a></li>
                        <li><a href="#">github</a></li>
                        <li><a href="#">codepen</a></li>
                    </Links>
                </main>
            </Container>
        );
    }
}

export default HomePage;
