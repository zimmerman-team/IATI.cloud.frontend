// cc:application state#2;application store model
import { OrganisationTypesInterface } from 'app/state/interfaces/OrganisationTypesInterface';
import { OrganisationsInterface } from 'app/state/interfaces/OrganisationsInterface';
import { SectorsInterface } from 'app/state/interfaces/SectorsInterface';
import { RegionInterface } from 'app/state/interfaces/RegionsInterface';
import { CountryInterface } from 'app/state/interfaces/CountriesInterface';
import { SectorCategoryInterface } from 'app/state/interfaces/SectorCategoryInterface';
import { SectorVocabularyInterface } from 'app/state/interfaces/SectorVocabularyInterface';
import { ActivityScopeInterface } from 'app/state/interfaces/ActivityScopeInterface';
import { ActivityStatusInterface } from 'app/state/interfaces/ActivityStatusInterface';
import { AidTypeInterface } from 'app/state/interfaces/AidTypeInterface';
import { AidTypeVocabularyInterface } from 'app/state/interfaces/AidTypeVocabularyInterface';
import { AidTypeCategoryInterface } from 'app/state/interfaces/AidTypeCategoryInterface';
import { DefaultCurrencyInterface } from 'app/state/interfaces/DefaultCurrencyInterface';
import { FinanceTypeInterface } from 'app/state/interfaces/FinanceTypeInterface';
import { TransactionTypeInterface } from 'app/state/interfaces/TransactionTypeInterface';
import { TransactionFlowTypeInterface } from 'app/state/interfaces/TransactionFlowTypeInterface';
import { TransactionTiedStatusInterface } from 'app/state/interfaces/TransactionTiedStatusInterface';
import { DocumentLinkCategoryInterface } from 'app/state/interfaces/DocumentLinkCategoryInterface';
import { IATIVersionInterface } from 'app/state/interfaces/IATIVersionInterface';
import { LanguageInterface } from 'app/state/interfaces/LanguageInterface';
import { HumanitarianInterface } from 'app/state/interfaces/HumanitarianInterface';
import { HumanitarianScopeInterface} from 'app/state/interfaces/HumanitarianScopeInterface';
import { TransactionHumanitarianInterface } from 'app/state/interfaces/TransactionHumanitarianInterface';
import { OtherIdentifierTypeInterface } from 'app/state/interfaces/OtherIdentifierTypeInterface';
import { TransactionProviderOrgScope } from 'app/state/interfaces/TransactionProviderOrgsInterface';
import { TransactionReceiverOrgsInterface } from 'app/state/interfaces/TransactionReceiverOrgsInterface';
import { ParticipatingOrgsInterface } from 'app/state/interfaces/ParticipatingOrgsInterface';
import { SecondaryReporterInterface } from 'app/state/interfaces/SecondaryReporterInterface';
import { PolicyMarkerInterface } from 'app/state/interfaces/PolicyMarkerInterface';

import { QueryModel } from 'app/state/models/QueryModel';
import { HierarchyInterface } from '../interfaces/HierarchyInterface';
import { TiedStatusInterface } from '../interfaces/TiedStatusInterface';
import { DefaultFlowTypeInterface } from '../interfaces/DefaultFlowTypeInterface';
import { TagInterface } from '../interfaces/TagInterface';
import { CollaborationTypeInterface } from '../interfaces/CollaborationTypeInterface';

export interface ApplicationStoreModel {
  organisationTypes: OrganisationTypesInterface;
  organisations: OrganisationsInterface;
  sectors: SectorsInterface;
  regions: RegionInterface;
  countries: CountryInterface;
  sectorCategories: SectorCategoryInterface;
  sectorVocabularies: SectorVocabularyInterface;
  query: QueryModel;
  activityStatus: ActivityStatusInterface;
  activityScope: ActivityScopeInterface;
  aidType: AidTypeInterface;
  aidTypeVocabulary: AidTypeVocabularyInterface;
  defaultCurrency: DefaultCurrencyInterface;
  participatingOrgs: ParticipatingOrgsInterface;
  aidTypeCategory: AidTypeCategoryInterface;
  collaborationType: CollaborationTypeInterface;
  defaultFlowType: DefaultFlowTypeInterface;
  hierarchy: HierarchyInterface;
  financeType: FinanceTypeInterface;
  tiedStatus: TiedStatusInterface;
  transactionType: TransactionTypeInterface;
  transactionHumanitarian: TransactionHumanitarianInterface;
  transactionProviderOrgs: TransactionProviderOrgScope;
  transactionReceiverOrgs: TransactionReceiverOrgsInterface;
  documentLinkCategory: DocumentLinkCategoryInterface;
  iatiVersion: IATIVersionInterface;
  language: LanguageInterface;
  transactionFlowType: TransactionFlowTypeInterface;
  transactionTiedStatus: TransactionTiedStatusInterface;
  humanitarian: HumanitarianInterface;
  humanitarianScope: HumanitarianScopeInterface;
  otherIdentifierType: OtherIdentifierTypeInterface;
  secondaryReporter: SecondaryReporterInterface;
  policyMarker: PolicyMarkerInterface;
  tag: TagInterface;
}
