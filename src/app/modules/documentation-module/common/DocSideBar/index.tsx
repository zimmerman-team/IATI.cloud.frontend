// @ts-nocheck
//cc:api documentation module#; navigation - side bar
import React from 'react';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';
import { useStoreState } from 'app/modules/documentation-module/state/store';
import { Root } from 'app/modules/documentation-module/state/RootModel';
import { getResults } from 'app/modules/documentation-module/common/DocSideBar/utils';
import { CustomLink } from 'app/modules/documentation-module/common/DocSideBar/common/ui/CustomLink';
import { DocsideBarContainer } from 'app/modules/documentation-module/common/DocSideBar/common/ui/DocsideBarContainer';
import { DocsideBarNavList } from 'app/modules/documentation-module/common/DocSideBar/common/ui/DocsideBarNavList';
import { ApiDocSearchBoxContainer } from 'app/modules/documentation-module/common/DocSideBar/common/ui/ApiDocSearchBoxContainer';
import { ApiDocSearchInput } from 'app/modules/documentation-module/common/DocSideBar/common/ui/ApiDocSearchInput';
import { TreeView } from '@material-ui/lab';
import { Folder, FolderOpen } from '@material-ui/icons';
import { TreeItemLink } from './common/TreeItem';
import { LicenseFooter } from './common/ui/LicenseFooter';

export function DocsideBar() {
  const history = useHistory();
  const data: Root = useStoreState((state) => state.data && state.data);
  const categories = data && data.collection;
  const [searchVal, setSearchVal] = React.useState('');
  const [activeHash, setActiveHash] = React.useState('');

  history.listen((l) => {
    setActiveHash(l.hash);
  });

  React.useEffect(() => {
    setTimeout(() => {
      if (window.location.hash) {
        const id = decodeURIComponent(window.location.hash.replace('#', ''));
        const element = document.getElementById(id);
        element && element.scrollIntoView();
      }
    }, 0);
  }, [data]);

  return (
    <DocsideBarContainer>
      <Box height="52px" />
      <ApiDocSearchBoxContainer>
        <ApiDocSearchInput
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <SearchIcon
          css={`
            color: #a1aebd;
          `}
        />
      </ApiDocSearchBoxContainer>
      <Box height="62px" />
      {/* 379px is every pixel above this component*/}
      <div style={{ overflowY: 'auto', height: 'calc(100vh - 379px)' }}>
        <DocsideBarNavList>
          <CustomLink key="Introduction" to="/documentation/">
            Introduction
          </CustomLink>

          <TreeView
            defaultCollapseIcon={<FolderOpen />}
            defaultExpandIcon={<Folder />}
          >
            {categories &&
              getResults(categories.item, searchVal).map((item) => (
                <TreeItemLink
                  item={item}
                  postmanId={item.id}
                  key={item.id}
                  activeHash={activeHash}
                >
                  {item.item &&
                    item.item.map((subItem1) => (
                      <TreeItemLink
                        item={subItem1}
                        postmanId={item.id}
                        key={subItem1.id}
                        activeHash={activeHash}
                      >
                        {subItem1.item &&
                          subItem1.item.map((subItem2) => (
                            <TreeItemLink
                              item={subItem2}
                              postmanId={item.id}
                              key={subItem2.id}
                              activeHash={activeHash}
                            >
                              {subItem2.item &&
                                subItem2.item.map((subItem3) => (
                                  <TreeItemLink
                                    item={subItem3}
                                    postmanId={item.id}
                                    key={subItem3.id}
                                    activeHash={activeHash}
                                  />
                                ))}
                            </TreeItemLink>
                          ))}
                      </TreeItemLink>
                    ))}
                </TreeItemLink>
              ))}
          </TreeView>
          <LicenseFooter>
            Code licensed under the GNU AGPL. Documentation licensed under CC BY
            3.0.
          </LicenseFooter>
        </DocsideBarNavList>
      </div>
    </DocsideBarContainer>
  );
}
