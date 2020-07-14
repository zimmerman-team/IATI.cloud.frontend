import { ActivityStatusModel } from 'app/state/models';
import { getLanguage } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface LanguageInterface extends ApiModel<ActivityStatusModel[]> {}

const language: LanguageInterface = {
  ...api(getLanguage),
};

export default language;
