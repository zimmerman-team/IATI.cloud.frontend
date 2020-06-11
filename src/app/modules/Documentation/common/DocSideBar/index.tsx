// @ts-nocheck
//cc:api documentation module#; navigation - side bar
import React from 'react';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import { useStoreState } from 'app/modules/Documentation/state/store';
import { Root } from 'app/modules/Documentation/state/RootModel';
import { getResults } from 'app/modules/Documentation/common/DocSideBar/utils';
import { CustomLink } from 'app/modules/Documentation/common/DocSideBar/common/ui/CustomLink';
import { DocsideBarContainer } from 'app/modules/Documentation/common/DocSideBar/common/ui/DocsideBarContainer';
import { DocsideBarNavList } from 'app/modules/Documentation/common/DocSideBar/common/ui/DocsideBarNavList';
import { ApiDocSearchBoxContainer } from 'app/modules/Documentation/common/DocSideBar/common/ui/ApiDocSearchBoxContainer';
import { ApiDocSearchInput } from 'app/modules/Documentation/common/DocSideBar/common/ui/ApiDocSearchInput';
import { TreeItem, TreeView } from '@material-ui/lab';
import { Folder, FolderOpen } from '@material-ui/icons';

import { TreeItemLink } from './common/TreeItem';

export function DocsideBar() {
  const data: Root = useStoreState(state => state.data && state.data);
  const categories = data && data.collection;
  const [searchVal, setSearchVal] = React.useState('');

  return (
    <DocsideBarContainer>
      <Box height="52px" />
      <ApiDocSearchBoxContainer>
        <ApiDocSearchInput
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onChange={e => setSearchVal(e.target.value)}
        />
        <SearchIcon
          css={`
            color: #A1AEBD;
          `}
        />
      </ApiDocSearchBoxContainer>
      <Box height="62px" />
      {/* 379px is every pixel above this component*/}
      <div style={{ overflowY: 'auto', height: 'calc(100vh - 379px)' }}>
        <DocsideBarNavList>
          <CustomLink key="Introduction" to="/documentation/introduction">
            Introduction
          </CustomLink>

          <CustomLink key="Introduction" to="/documentation/introduction">
            Available endpoints
          </CustomLink>

          <CustomLink key="Introduction" to="/documentation/introduction">
            XML export
          </CustomLink>

          <CustomLink key="Introduction" to="/documentation/introduction">
            CSV export
          </CustomLink>

          <CustomLink key="Introduction" to="/documentation/introduction">
            XLS export
          </CustomLink>

          <TreeView
            defaultCollapseIcon={<FolderOpen />}
            defaultExpandIcon={<Folder />}
          >
            {categories && getResults(categories.item, searchVal).map(item => (
                <TreeItemLink id={item.name} label={item.name} isSubFolder={item.item && true} postmanId={item._postman_id} requestMethod={!item.item && item.request.method}>
                  {item.item && item.item.map(subItem1 => (
                    <TreeItemLink id={subItem1.name} label={subItem1.name} isSubFolder={subItem1.item && true} postmanId={item._postman_id} requestMethod={!subItem1.item && subItem1.request.method}>
                      {subItem1.item && subItem1.item.map(subItem2 => (
                        <TreeItemLink id={subItem2._postman_id} label={subItem2.name} isSubFolder={subItem2.item && true} postmanId={item._postman_id} requestMethod={!subItem2.item && subItem2.request.method}>
                          {subItem2.item && subItem2.item.map(subItem3 => (
                            <TreeItemLink id={subItem3._postman_id} label={subItem3.name} isSubFolder={subItem3.item && true} postmanId={item._postman_id} requestMethod={!subItem3.item && subItem3.request.method}/>
                          ))}
                        </TreeItemLink>
                      ))}
                    </TreeItemLink>
                  ))}
                </TreeItemLink>
              ))}
          </TreeView>
        </DocsideBarNavList>
      </div>
    </DocsideBarContainer>
  );
}
