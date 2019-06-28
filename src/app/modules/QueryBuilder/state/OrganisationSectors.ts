// Import redux types
import { ActionCreator, Dispatch, Reducer } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import actionEmitter from 'app/utils/common-action-emitter';

// Define the OrganisationTYpe type
export interface IOrganisationSector {
  code: string;
  name: string;
  language: string;
  description: string;
  category: string;
  categoryName: string;
  categoryDescription: string;
}

// Define the OrganisationType State
export interface IOrganisationSectorState {
  readonly organisationSectors: IOrganisationSector[];
}

export type OrganisationSectorState = Readonly<{
  organisationSector: IOrganisationSector[];
}>;

// Define the initial state
const initialOrganisationSectorState: IOrganisationSectorState = {
  organisationSectors: []
};

export const OrganisationSectorReducer: Reducer<
  IOrganisationSectorState,
  OrganisationSectorActions
> = (state = initialOrganisationSectorState, action) => {
  switch (action.type) {
    case OrganisationSectorActionTypes.GET_ALL: {
      return {
        ...state,
        organisationSectors: action.organisationSectors
      };
    }
    default:
      return state;
  }
};

// Create Action Constants
export enum OrganisationSectorActionTypes {
  GET_ALL = 'ORGANISATION_SECTORS/GET_ALL',
  GET_START = 'ORGANISATION_SECTORS/GET_START',
  GET_SUCCESS = 'ORGANISATION_SECTORS/GET_SUCCESS',
  GET_FAIL = 'ORGANISATION_SECTORS/GET_FAIL',
  SET_SECTORS = 'ORGANISATION_SECTORS/SET_SECTORS'
}

export const GetSectorsStart = actionEmitter(
  OrganisationSectorActionTypes.GET_START
);
export const GetSectorSuccess = actionEmitter(
  OrganisationSectorActionTypes.GET_SUCCESS
);
export const GetSectorFailure = actionEmitter(
  OrganisationSectorActionTypes.GET_FAIL
);

// Interface for Get All Action Type
export interface IOrganisationSectorGetAllAction {
  type: OrganisationSectorActionTypes.GET_ALL;
  organisationSectors: IOrganisationSector[];
}

/*

Combine the action types with a union (we assume there are more)
example: export type OrganisationTypeActions = IGetAllAction | IGetOneAction ...
*/
export type OrganisationSectorActions = IOrganisationSectorGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */

export const getAllOrganisationSectors: ActionCreator<
  ThunkAction<
    Promise<any>,
    IOrganisationSectorState,
    null,
    IOrganisationSectorGetAllAction
  >
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('data/Sectors.json');
      dispatch({
        organisationSectors: response.data.Sector,
        type: OrganisationSectorActionTypes.GET_ALL
      });
    } catch (err) {
      console.error(err);
    }
  };
};
