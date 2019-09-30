import React from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useStoreState } from 'app/modules/Documentation/state/store';
import { HashLink } from 'react-router-hash-link';

const CustomLink = styled(props => <NavLink {...props} />)`
  width: 100%;
  margin-bottom: 20px;
  height: 24px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgb(18, 18, 18);

  &:hover {
    color: #25a898;
  }
`;

const CustomLink2 = styled(props => <HashLink {...props} />)`
  width: 100%;
  margin-bottom: 20px;
  height: 24px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgb(18, 18, 18);

  &:hover {
    color: #25a898;
  }
`;

const SubLink1 = styled(props => <CustomLink2 {...props} />)`
  font-size: 14px;
  color: rgb(85, 85, 85);
`;

const SubLink2 = styled(props => <CustomLink2 {...props} />)`
  font-size: 12px;
  color: rgb(127, 127, 127);
`;

const SubLink3 = styled(props => <CustomLink2 {...props} />)`
  font-size: 10px;
  color: rgb(163, 163, 163);
`;

export const DocsideBarContainer = styled.div`
  &&& {
    padding-left: 20px;
    padding-bottom: 0;
    background-color: #f0f3f7;
    position: sticky;
    top: 187px;
    height: calc(100vh - 187px);
    overflow-y: scroll;
  }
`;

export const DocsideBarNavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DocsideBar = () => {
  const categories = useStoreState(state => state.collection);

  return (
    <DocsideBarContainer>
      <Box height="20px" />
      <CustomLink key="Introduction" to="/documentation/introduction">
        Introduction
      </CustomLink>

      <Box width="100%" height="20px" />
      <DocsideBarNavList>
        {/* ------------------------------- */}
        {/* main */}
        {categories &&
          categories.item.map(item => (
            <div
              css={`
                margin-bottom: 20px;
              `}
              key={item._postman_id}
            >
              <CustomLink to={item._postman_id + '#' + item.name}>
                {item.name}
              </CustomLink>
              {/* ------------------------------- */}
              {/* sub 1 */}
              {item.item &&
                item.item.map(subItem1 => (
                  <div
                    css={`
                      margin-bottom: 10px;
                      padding-left: 10px;
                    `}
                    key={subItem1._postman_id}
                  >
                    {subItem1._postman_isSubFolder ? (
                      <SubLink1
                        css={`
                          font-weight: bold;
                        `}
                        to={item._postman_id + '#' + subItem1.name}
                      >
                        {subItem1.name}
                      </SubLink1>
                    ) : (
                      <SubLink1 to={item._postman_id + '#' + subItem1.name}>
                        {subItem1.name}
                      </SubLink1>
                    )}

                    {/* ------------------------------- */}
                    {/* sub 2 */}
                    {subItem1.item &&
                      subItem1.item.map(subItem2 => (
                        <div
                          key={subItem2._postman_id}
                          css={`
                            padding-left: 10px;
                          `}
                        >
                          {subItem2._postman_isSubFolder ? (
                            <SubLink2
                              css={`
                                font-weight: bold;
                              `}
                              to={item._postman_id + '#' + subItem2.name}
                            >
                              {subItem2.name}
                            </SubLink2>
                          ) : (
                            <SubLink2
                              to={item._postman_id + '#' + subItem2.name}
                            >
                              {subItem2.name}
                            </SubLink2>
                          )}
                          {/* ------------------------------- */}
                          {/* sub 3 */}
                          {/*{subItem2.item &&
                            subItem2.item.map(subItem3 => (
                              <div
                                key={subItem3._postman_id}
                                css={`
                                  padding-left: 10px;
                                `}
                              >
                                <SubLink3
                                  to={item._postman_id + '#' + subItem3.name}
                                >
                                  {subItem3.name}
                                </SubLink3>
                              </div>
                            ))}*/}
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          ))}
      </DocsideBarNavList>
    </DocsideBarContainer>
  );
};
