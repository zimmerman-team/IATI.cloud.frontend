import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavButtonModel } from 'app/modules/documentation-module/common/DocDetail/common/DocCallPreview/common/RequestNavigator/common/NavButton/model';
export const NavButton = (props: NavButtonModel) => {
  return (
    <NavLink
      to="/documentation"
      css={`
        height: 55px;
        font-family: Inter, serif;
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: 0.15px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-bottom: 2px solid transparent;

        &:hover {
          border-bottom-color: white;
        }
      `}
    >
      {props.label}
    </NavLink>
  );
};
