import styled from 'styled-components';
export const DebugBox = styled.div`
  &&& {
    * {
      outline: dashed 1px green !important;
      background-color: white !important;
      color: purple !important;
    }
  }
`;

export const OutlineBox = styled.div`
  &&& {
    & [class*='MuiGrid-container'] {
      outline: solid 1px black !important;
    }
  }
`;
