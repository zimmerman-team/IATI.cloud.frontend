import { css } from 'styled-components';

export const styles = {
  chipContainer: css`
    height: 32px;
    color: white;
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 2px;
    align-items: center;
    background: #155366;
    padding-left: 12px;
    padding-right: 9px;
    user-select: none;
    font-size: 14px;
    font-weight: 500;
    margin-right: 10px;
  `,
  chipCloseBtn: css`
    display: flex;
    cursor: pointer;
    margin-left: 10px;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1.05rem !important;
    }
  `,
};
