export type SideBarItemModel = {
  label: string;
  path?: string;
};

export type SideBarModel = {
  sideBarItems: SideBarItemModel[];
  categories: SideBarItemModel[];
};

export const sidebarConfig: SideBarModel = {
  sideBarItems: [
    {
      label: 'Introduction',
      path: '/',
    },
    {
      label: 'Available endpoints',
      path: '/',
    },
    {
      label: 'XML export',
      path: '/',
    },
    {
      label: 'CSV export',
      path: '/',
    },
    {
      label: 'XLS export',
      path: '/',
    },
  ],

  categories: [
    {
      label: 'Activity List',
      path: '/',
    },
    {
      label: 'Activity Detail',
      path: '/',
    },
    {
      label: 'Dataset List',
      path: '/',
    },
    {
      label: 'Budget List',
      path: '/',
    },
    {
      label: 'Budget Aggregations',
      path: '/',
    },
    {
      label: 'Codelist Meta List',
      path: '/',
    },
    {
      label: 'Country List',
      path: '/',
    },
    {
      label: 'Location List',
      path: '/',
    },
    {
      label: 'Organisation List',
      path: '/',
    },
    {
      label: 'Publisher List',
      path: '/',
    },
    {
      label: 'Region List',
      path: '/',
    },
    {
      label: 'Result List',
      path: '/',
    },
    {
      label: 'Result Aggregations',
      path: '/',
    },
    {
      label: 'Sector List',
      path: '/',
    },
    {
      label: 'Transaction List',
      path: '/',
    },
    {
      label: 'Transaction Aggregations',
      path: '/',
    },
    {
      label: 'DataStore Search Engine',
      path: '/',
    },
  ],
};
