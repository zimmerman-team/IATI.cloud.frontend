import { ReactNode } from 'react';

export type ApiListItemModel = {
  label?: string;
  children?: ReactNode;
};

export type ApiListModel = {
  data: string[];
};
