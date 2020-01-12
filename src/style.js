import { css } from '@emotion/core';

export const columnWidth = '800px';

export const gap = {
    xxxs: '2px',
    xxs: '4px',
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
    xxxxl: '96px',
};

export const font = {
    family: {
        main: '"Lora", serif',
        secondary: '"Montserrat", sans-serif',
    },
    size: {
        xs: css`
            font-size: 12px;
            line-height: 1.6;
        `,
        s: css`
            font-size: 14px;
            line-height: 1.6;
        `,
        m: css`
            font-size: 16px;
            line-height: 1.65;
        `,
        l: css`
            font-size: 18px;
            line-height: 1.7;
        `,
        xl: css`
            font-size: 20px;
            line-height: 1.6;
        `,
        xxl: css`
            font-size: 24px;
            line-height: 1.6;
        `,
        title: {
            xxs: css`
                font-size: 18px;
                line-height: 1.35;
            `,
            xs: css`
                font-size: 20px;
                line-height: 1.3;
            `,
            s: css`
                font-size: 24px;
                line-height: 1.3;
            `,
            m: css`
                font-size: 30px;
                line-height: 1.3;
            `,
            l: css`
                font-size: 36px;
                line-height: 1.2;
            `,
        },
    },
};

export const color = {
    grey: {
        '900': '#22252a',
        '800': '#353a3f',
        '700': '#4a5056',
        '600': '#878e95',
        '500': '#aeb5bc',
        '400': '#cfd4d9',
        '300': '#dfe2e6',
        '200': '#e9ecef',
        '100': '#f1f3f5',
    },
    primary: {
        '900': '#202e69',
        '800': '#263881',
        '700': '#374a9e',
        '600': '#4b60bf',
        '500': '#6378d7',
        '400': '#788eda',
        '300': '#99afe8',
        '200': '#d5def6',
        '100': '#f1f4fd',
    },
    accent: {
        '800': '#591e1b',
        '700': '#7e2521',
        '600': '#aa3029',
        '500': '#cb4039',
        '400': '#d56b68',
        '300': '#eaadac',
        '200': '#f9e9e8',
    },
};
