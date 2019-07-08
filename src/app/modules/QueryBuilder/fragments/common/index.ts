/* core */
import { ReactNode } from 'react';
/* third-party*/
import { GridSpacing } from '@material-ui/core/Grid';
/* common*/
import { ModuleFragment } from 'app/modules/QueryBuilder/fragments/common/ModuleFragment';
import { FragmentDivider } from 'app/modules/QueryBuilder/fragments/common/FragmentDivider';

export type FragmentConfigType = {
  name?: string;
  description?: string;
  spacing?: GridSpacing;
};

export type FragmentProps = {
  name?: string;
  description?: string;
  children?: ReactNode;
  spacing?: GridSpacing;
};

export { ModuleFragment, FragmentDivider };
