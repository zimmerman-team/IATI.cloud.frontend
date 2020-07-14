import styled from 'styled-components';
import get from 'lodash/get';

export const ApiItemDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f0f3f7;
`;

export function getEndpointPath(endpoint: any): string {
  let path: string[] = [];
  let endpointPath: string = '';

  if (endpoint.item[0] && endpoint.item[0].hasOwnProperty('item')) {
    if (
      endpoint.item[0].item[0] &&
      endpoint.item[0].item[0].hasOwnProperty('item')
    ) {
      if (
        endpoint.item[0].item[0].item[0] &&
        endpoint.item[0].item[0].item[0].hasOwnProperty('item')
      ) {
      } else {
        if (endpoint.item[0].item[0].item.length > 0) {
          path = get(endpoint, 'item[0].item[0].item[0].request.url.path', []);
        } else {
          path = get(endpoint, 'item[0].item[1].request.url.path', []);
        }
      }
    } else {
      if (endpoint.item[0].item.length > 0) {
        path = get(endpoint, 'item[0].item[0].request.url.path', []);
      } else {
        path = get(endpoint, 'item[1].item[0].request.url.path', []);
      }
    }
  } else {
    path = get(endpoint, 'item[0].request.url.path', []);
  }

  path.forEach((pathItem) => {
    if (pathItem != '') {
      endpointPath += pathItem += '/';
    }
  });

  return endpointPath;
}
