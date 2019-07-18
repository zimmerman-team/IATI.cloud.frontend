import { IntroFragment } from './IntroFragment';
import { WhoFragment } from './WhoFragment';
import { FilterFragment } from './FilterFragment';
import { OutputFragment } from './OutputFragment';
import { ResultFragment } from './ResultFragment';
import { DownloadFragment } from './DownloadFragment';

export {
  IntroFragment,
  WhoFragment,
  FilterFragment,
  OutputFragment,
  ResultFragment,
  DownloadFragment,
};

export type FragmentBaseModel = {
  name: string;
  description?: string;
};
