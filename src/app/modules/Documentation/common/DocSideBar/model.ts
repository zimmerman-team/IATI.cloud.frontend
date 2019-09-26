import { LocationDescriptor } from 'history';

export type SideBarItemModel = {
  label: string;
  path?: LocationDescriptor<any>;
};

export type SideBarModel = {
  sideBarItems: SideBarItemModel[];
  categories: SideBarItemModel[];
};
