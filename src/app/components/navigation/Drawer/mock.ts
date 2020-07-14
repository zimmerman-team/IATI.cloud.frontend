import { DrawerMenuModel } from 'app/components/navigation/Drawer/model';

export const mockData: DrawerMenuModel = {
  links: [
    {
      label: 'HOME',
      url: '/',
    },
    {
      label: 'ABOUT',
      url: '/about',
    },
    {
      label: 'QUERY BUILDER',
      url: '/querybuilder/core-filters',
    },
    {
      label: 'API DOCUMENTATION',
      url: '/documentation',
    },
  ],
};
