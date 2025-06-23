export interface IFetchOptions extends RequestInit {
  body?: any;
  headers?: HeadersInit;
}

export interface IFetcherInstance {
  get: (endpoint: string, headers?: HeadersInit) => Promise<any>;
  post: (endpoint: string, body?: any, headers?: HeadersInit) => Promise<any>;
  patch: (endpoint: string, body?: any, headers?: HeadersInit) => Promise<any>;
  delete: (endpoint: string, body?: any, headers?: HeadersInit) => Promise<any>;
}
