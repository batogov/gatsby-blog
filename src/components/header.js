import React from 'react';
import styled from '@emotion/styled';
import { font, gap, columnWidth } from './../style';
import { Link } from 'gatsby';

const Container = styled.header`
    margin-bottom: ${gap.xxxl};

    @media (max-width: ${columnWidth}) {
        margin-bottom: ${gap.xl};
    }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;

    height: ${gap.xxxxl};
    width: ${columnWidth};

    @media (max-width: ${columnWidth}) {
        height: ${gap.xxxl};
        width: 100%;
    }
`;

const Logo = styled.div`
    & a {
        ${font.size.title.l}
        text-decoration: none;

        border: 0;

        @media (max-width: ${columnWidth}) {
            ${font.size.title.s};
        }
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

const Menu = styled.ul`
    display: flex;

    padding: 0;
    margin: 0;
    margin-left: auto;

    list-style: none;

    ${font.size.l};

    @media (max-width: ${columnWidth}) {
        ${font.size.m};
    }
`;

const MenuItem = styled.li`
    margin: 0;
    padding: 0;

    &:not(:last-child) {
        margin-right: ${gap.l};
    }

    @media (max-width: ${columnWidth}) {
        &:not(:last-child) {
            margin-right: ${gap.s};
        }
    }
`;

const Avatar = styled.img`
    width: ${gap.xxl};
    height: ${gap.xxl};
    border-radius: 50%;

    @media (max-width: ${columnWidth}) {
        width: ${gap.xl};
        height: ${gap.xl};
    }
`;

class Header extends React.Component {
    render() {
        return (
            <Container>
                <Column>
                    <Logo>
                        <Link
                            to="/blog/"
                            activeClassName="active-link"
                            className="logo-link"
                        >
                            <Avatar src="/../avatar.png" />
                        </Link>
                    </Logo>
                    <Nav>
                        <Menu>
                            <MenuItem>
                                <Link to="/blog/" activeClassName="active-link">
                                    Articles
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/" activeClassName="active-link">
                                    About me
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Nav>
                </Column>
            </Container>
        );
    }
}

export default Header;
