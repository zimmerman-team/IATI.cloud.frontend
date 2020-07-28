import { ReactNode } from 'react';

export type ApiListItemModel = {
  label?: string;
  name?: string;
  children?: ReactNode;
  id?: string;
  path?: any;
};

export type ApiListModel = {
  data: string[];
};
