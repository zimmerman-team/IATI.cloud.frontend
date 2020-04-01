// @ts-nocheck
//cc:api documentation module#; navigation - side bar
import React from 'react';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import { useStoreState } from 'app/modules/Documentation/state/store';
import { Root } from 'app/modules/Documentation/state/RootModel';
import { getResults } from 'app/modules/Documentation/common/DocSideBar/utils';
import { CustomLink } from 'app/modules/Documentation/common/DocSideBar/common/ui/CustomLink';
import { SubLink1 } from 'app/modules/Documentation/common/DocSideBar/common/ui/SubLink1';
import { SubLink2 } from 'app/modules/Documentation/common/DocSideBar/common/ui/SubLink2';
import { SubLink3 } from 'app/modules/Documentation/common/DocSideBar/common/ui/SubLink3';
import { DocsideBarContainer } from 'app/modules/Documentation/common/DocSideBar/common/ui/DocsideBarContainer';
import { DocsideBarNavList } from 'app/modules/Documentation/common/DocSideBar/common/ui/DocsideBarNavList';
import { CategoryContainer } from 'app/modules/Documentation/common/DocSideBar/common/ui/CategoryContainer';
import { ItemContainer } from 'app/modules/Documentation/common/DocSideBar/common/ui/ItemContainer';
import { SubItemContainer } from 'app/modules/Documentation/common/DocSideBar/common/ui/SubItemContainer';
import { ApiDocSearchBoxContainer } from 'app/modules/Documentation/common/DocSideBar/common/ui/ApiDocSearchBoxContainer';
import { ApiDocSearchInput } from 'app/modules/Documentation/common/DocSideBar/common/ui/ApiDocSearchInput';

export function DocsideBar() {
  const data: Root = useStoreState(state => state.data && state.data);
  const categories = data && data.collection;
  const [searchVal, setSearchVal] = React.useState('');

  return (
    <DocsideBarContainer>
      <Box height="25px" />
      <ApiDocSearchBoxContainer>
        <ApiDocSearchInput
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onChange={e => setSearchVal(e.target.value)}
        />
        <SearchIcon
          css={`
            color: #a1aebd;
          `}
        />
      </ApiDocSearchBoxContainer>
      <Box height="20px" />
      <div style={{ overflowY: 'auto', height: 'calc(100vh - 280px)' }}>
        <CustomLink key="Introduction" to="/documentation/introduction">
          Introduction
        </CustomLink>

        <Box width="100%" height="20px" />
        <DocsideBarNavList>
          {/* ------------------------------- */}
          {/* main */}
          {categories &&
            getResults(categories.item, searchVal).map(item => (
              <CategoryContainer key={item._postman_id}>
                <CustomLink to={`${item._postman_id}#${item.name}`}>
                  {item.name}
                </CustomLink>
                {/* ------------------------------- */}
                {/* sub 1 */}
                {item.item &&
                  item.item.map(subItem1 => (
                    <ItemContainer key={subItem1._postman_id}>
                      {subItem1._postman_isSubFolder ? (
                        <SubLink1
                          css={`
                            font-weight: bold;
                          `}
                          to={`${item._postman_id}#${subItem1.name}`}
                        >
                          {subItem1.name}
                        </SubLink1>
                      ) : (
                        <SubLink1 to={`${item._postman_id}#${subItem1.name}`}>
                          {subItem1.name}
                        </SubLink1>
                      )}

                      {/* ------------------------------- */}
                      {/* sub 2 */}
                      {subItem1.item &&
                        subItem1.item.map(subItem2 => (
                          <SubItemContainer key={subItem2._postman_id}>
                            {subItem2._postman_isSubFolder ? (
                              <SubLink2
                                css={`
                                  font-weight: bold;
                                `}
                                to={`${item._postman_id}#${subItem2.name}`}
                              >
                                {subItem2.name}
                              </SubLink2>
                            ) : (
                              <SubLink2
                                to={`${item._postman_id}#${subItem2.name}`}
                              >
                                {subItem2.name}
                              </SubLink2>
                            )}
                            {/* ------------------------------- */}
                            {/* sub 3 */}
                            {subItem2.item &&
                              subItem2.item.map(subItem3 => (
                                <SubItemContainer key={subItem3._postman_id}>
                                  <SubLink3
                                    to={`${item._postman_id}#${subItem3.name}`}
                                  >
                                    {subItem3.name}
                                  </SubLink3>
                                </SubItemContainer>
                              ))}
                          </SubItemContainer>
                        ))}
                    </ItemContainer>
                  ))}
              </CategoryContainer>
            ))}
        </DocsideBarNavList>
      </div>
    </DocsideBarContainer>
  );
}
