// textStyles

import { css } from 'styled-components';

export default {
  h2: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-ExtraLightBETA;
    letter-spacing: -0.47px;
    font-size: 3.5rem;
    font-family: InterBETA;
    font-weight: extralight;
  `,

  h3: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-Medium;
    font-size: 3rem;
    font-family: Inter;
    font-weight: medium;
  `,

  h4: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-SemiBold;
    letter-spacing: 0.25px;
    font-size: 2.125rem;
    font-family: Inter;
    font-weight: 600;
  `,

  h5: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-LightBETA;
    line-height: 20px;
    font-size: 1.5rem;
    font-family: InterBETA;
    font-weight: 300;
  `,

  h6: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-Medium;
    letter-spacing: 0.25px;
    line-height: 16px;
    font-size: 1.25rem;
    font-family: Inter;
    font-weight: medium;
  `,

  body: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-LightBETA;
    letter-spacing: 0.4px;
    line-height: 12px;
    font-size: 1rem;
    font-family: InterBETA;
    font-weight: 300;
  `,

  bodySmall: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-Regular;
    letter-spacing: 0.25px;
    line-height: 12px;
    font-size: 0.875rem;
    font-family: Inter;
    font-weight: 400;
  `,

  subtitle: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-Medium;
    letter-spacing: 0.25px;
    line-height: 12px;
    font-size: 1rem;
    font-family: Inter;
    font-weight: medium;
  `,

  subtitleSmall: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-Medium;
    line-height: 12px;
    font-size: 0.875rem;
    font-family: Inter;
    font-weight: medium;
  `,

  button: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-SemiBold;
    letter-spacing: 1.25px;
    line-height: 12px;
    font-size: 0.875rem;
    font-family: Inter;
    font-weight: 600;
  `,

  caption: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-Regular;
    letter-spacing: 0.6px;
    line-height: 8px;
    font-size: 0.75rem;
    font-family: Inter;
    font-weight: 400;
  `,

  overline: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-Regular;
    letter-spacing: 2px;
    line-height: 8px;
    font-size: 0.75rem;
    font-family: Inter;
    font-weight: 400;
  `,

  code: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: RobotoMono-Regular;
    font-size: 0.875rem;
    font-family: RobotoMono;
    font-weight: 400;
  `,

  textStyle: css`
    color: ${({ theme }) => theme.palette.blackOrTextDarkBase};
    font-face: Inter-Regular;
    letter-spacing: -1px;
    font-size: 4rem;
    font-family: Inter;
    font-weight: 400;
  `
};
