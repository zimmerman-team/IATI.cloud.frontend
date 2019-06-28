// Import redux types
import { ActionCreator, Dispatch, Reducer } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Define the OrganisationTYpe type
export interface IOrganisationType {
  code: string;
  name: string;
  language: string;
}

// Define the OrganisationType State
export interface IOrganisationTypeState {
  readonly organisationTypes: IOrganisationType[];
}

// Define the initial state
const initialOrganisationTypeState: IOrganisationTypeState = {
  organisationTypes: []
};

export const OrganisationTypeReducer: Reducer<
  IOrganisationTypeState,
  OrganisationTypeActions
> = (state = initialOrganisationTypeState, action) => {
  switch (action.type) {
    case OrganisationTypeActionTypes.GET_ALL: {
      return {
        ...state,
        organisationTypes: action.organisationTypes
      };
    }
    default:
      return state;
  }
};

// Create Action Constants
export enum OrganisationTypeActionTypes {
  GET_ALL = 'ORGANISATION_TYPES/GET_ALL'
}


// Interface for Get All Action Type
export interface IOrganisationTypeGetAllAction {
  type: OrganisationTypeActionTypes.GET_ALL;
  organisationTypes: IOrganisationType[];
}

/*
Combine the action types with a union (we assume there are more)
example: export type OrganisationTypeActions = IGetAllAction | IGetOneAction ...
*/
export type OrganisationTypeActions = IOrganisationTypeGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllOrganisationTypes: ActionCreator<
  ThunkAction<
    Promise<any>,
    IOrganisationTypeState,
    null,
    IOrganisationTypeGetAllAction
  >
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('data/OrganisationTypes.json');
      dispatch({
        organisationTypes: response.data.OrganisationType,
        type: OrganisationTypeActionTypes.GET_ALL
      });
    } catch (err) {
      console.error(err);
    }
  };
};
