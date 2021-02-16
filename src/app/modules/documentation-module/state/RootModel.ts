export interface Root {
  collection: {
    item: {
      description?: string;
      id: string;
      item: {
        id: string;
        _postman_isSubFolder?: boolean;
        item?: {
          protocolProfileBehavior?: {
            disableBodyPruning: boolean;
            [k: string]: any;
          };
          id: string;
          request?: {
            method: string;
            header: any[];
            url: {
              query: {
                key: string;
                value: string;
                disabled?: boolean;
                type?: string;
                description?: string;
                [k: string]: any;
              }[];
              raw: string;
              protocol: string;
              host: string[];
              path: string[];
              [k: string]: any;
            };
            description?: string;
            [k: string]: any;
          };
          name: string;
          _postman_isSubFolder?: boolean;
          description?: string;
          item?: {
            protocolProfileBehavior: {
              disableBodyPruning: boolean;
              [k: string]: any;
            };
            id: string;
            request: {
              method: string;
              description?: string;
              header: {
                key: string;
                value: string;
                type: string;
                [k: string]: any;
              }[];
              url: {
                query?: {
                  key: string;
                  value: string;
                  disabled?: boolean;
                  type?: string;
                  [k: string]: any;
                }[];
                raw: string;
                protocol: string;
                host: string[];
                path: string[];
                [k: string]: any;
              };
              body?: {
                mode: string;
                raw?: string;
                formdata?: {
                  key: string;
                  value: string;
                  type: string;
                  disabled?: boolean;
                  [k: string]: any;
                }[];
                [k: string]: any;
              };
              [k: string]: any;
            };
            name: string;
            [k: string]: any;
          }[];
          [k: string]: any;
        }[];
        name: string;
        description?: string;
        protocolProfileBehavior?: {
          disableBodyPruning: boolean;
          [k: string]: any;
        };
        request?: {
          method: string;
          header: any[];
          url: {
            query: {
              key: string;
              value: string;
              disabled?: boolean;
              type?: string;
              [k: string]: any;
            }[];
            raw: string;
            protocol: string;
            host: string[];
            path: string[];
            [k: string]: any;
          };
          description?: string;
          [k: string]: any;
        };
        [k: string]: any;
      }[];
      name: string;
      [k: string]: any;
    }[];
    info: {
      schema: string;
      name: string;
      description: string;
      id: string;
      [k: string]: any;
    };
    [k: string]: any;
  };
  [k: string]: any;
}
