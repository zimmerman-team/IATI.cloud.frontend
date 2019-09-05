import { FunctionComponent } from 'react';

export type ArticleCardModel = {
  title: string;
  description: string;
  buttonLabel: string;
  loaded?: boolean;
  path?: string;
};
