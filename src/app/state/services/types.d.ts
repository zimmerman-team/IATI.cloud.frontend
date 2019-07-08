declare module 'MyTypes' {
  export type Services = typeof import('app/state/services/index').default;
}
