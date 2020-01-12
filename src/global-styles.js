import { css } from '@emotion/core';
import { font, gap, columnWidth, color } from './style';

export const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700&subset=cyrillic');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,800&subset=cyrillic');

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;

        font-family: ${font.family.main};
        color: ${color.grey[900]};
    }

    strong {
        color: ${color.grey[800]};
    }

    h1,
    h2,
    h3 {
        font-family: ${font.family.secondary};
        font-weight: 700;
        color: ${color.grey[800]};
    }

    h1 {
        margin-bottom: ${gap.xl};

        ${font.size.title.l};

        @media (max-width: ${columnWidth}) {
            margin-bottom: ${gap.l};

            ${font.size.title.s};
        }
    }

    h2 {
        margin-top: ${gap.xxl};
        margin-bottom: ${gap.m};

        ${font.size.title.m};

        @media (max-width: ${columnWidth}) {
            margin-top: ${gap.xl};
            margin-bottom: ${gap.s};

            ${font.size.title.xs};
        }
    }

    h3 {
        margin-top: ${gap.xl};
        margin-bottom: ${gap.s};

        ${font.size.title.s};

        @media (max-width: ${columnWidth}) {
            margin-top: ${gap.l};
            margin-bottom: ${gap.xs};

            ${font.size.title.xxs};
        }
    }

    p {
        margin-top: ${gap.m};
        margin-bottom: 0;

        ${font.size.l};

        @media (max-width: ${columnWidth}) {
            margin-top: ${gap.s};

            ${font.size.m};
        }
    }

    a {
        color: ${color.primary[700]};
        text-decoration: none;

        border-bottom: 1px solid ${color.primary[200]};

        &:hover {
            color: ${color.accent[500]};
            border-bottom: 1px solid ${color.accent[300]};
        }
    }

    .active-link {
        border-bottom: 1px solid ${color.grey[300]};
        color: ${color.grey[900]};
    }

    .logo-link {
        border: 0;
    }

    h1 + *,
    h2 + *,
    h3 + * {
        margin-top: 0;
    }

    .gatsby-resp-image-wrapper,
    .gatsby-resp-image-figure {
        margin-top: ${gap.xl};
        margin-bottom: ${gap.xl};

        @media (max-width: ${columnWidth}) {
            margin-top: ${gap.l};
            margin-bottom: ${gap.l};
        }
    }

    .gatsby-resp-image-figure > .gatsby-resp-image-wrapper {
        margin: 0;
    }

    .gatsby-highlight {
        margin-top: ${gap.m};
    }

    ol,
    ul {
        margin: 0;
        padding: 0;
        margin-top: ${gap.m};
        margin-left: ${gap.xl};

        @media (max-width: ${columnWidth}) {
            margin-top: ${gap.s};
            margin-left: ${gap.l};
        }
    }

    article li {
        ${font.size.l};

        &:not(:last-child) {
            margin-bottom: ${gap.xs};
        }

        @media (max-width: ${columnWidth}) {
            ${font.size.m};

            &:not(:last-child) {
                margin-bottom: ${gap.xxs};
            }
        }
    }

    article p:last-of-type {
        margin-bottom: 0px;
    }

    img {
        display: block;
        max-width: ${columnWidth};
    }

    .gatsby-resp-image-figcaption {
        margin-top: ${gap.xs};

        ${font.size.m};
        color: ${color.grey[600]};

        @media (max-width: ${columnWidth}) {
            ${font.size.s};
        }
    }

    .gatsby-resp-iframe-wrapper {
        margin-top: ${gap.xl};

        @media (max-width: ${columnWidth}) {
            margin-top: ${gap.l};
        }
    }

    figure {
        margin: 0;
        padding: 0;
    }
`;
