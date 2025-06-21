import { IFetcherInstance, IFetchOptions } from './fetcher.interface';


export function Fetcher(
  baseURL = '',
  defaultOptions: IFetchOptions = {}
): IFetcherInstance {
  const TIMEOUT = 10000; // 10 seconds

  async function makeFetch(
    endpoint: string,
    options: IFetchOptions = {}
  ): Promise<any> {
    const url = `${baseURL}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(defaultOptions.headers || {}),
      ...(options.headers || {}),
    };

    const config: RequestInit = {
      ...options,
      headers,
      signal: controller.signal,
      method: options.method || 'GET',
      body: options.body ? JSON.stringify(options.body) : undefined,
    };

    try {
      const res = await fetch(url, config);
      clearTimeout(timeoutId);

      const contentType = res.headers.get('content-type') || '';
      const data = contentType.includes('application/json')
        ? await res.json()
        : await res.text();

      if (!res.ok) {
        throw new Error((data as any)?.error || res.statusText);
      }

      return data;
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        throw new Error(
          `Request to ${url} aborted after ${TIMEOUT / 1000} seconds`
        );
      }
      console.error(`Fetcher error [${config.method} ${endpoint}]`, error);
      throw error;
    }
  }

  return {
    get: (endpoint: string, headers: HeadersInit = {}) =>
      makeFetch(endpoint, { method: 'GET', headers }),

    post: (endpoint: string, body: any = {}, headers: HeadersInit = {}) =>
      makeFetch(endpoint, { method: 'POST', body, headers }),

    patch: (endpoint: string, body: any = {}, headers: HeadersInit = {}) =>
      makeFetch(endpoint, { method: 'PATCH', body, headers }),

    delete: (endpoint: string, body: any = {}, headers: HeadersInit = {}) =>
      makeFetch(endpoint, { method: 'DELETE', body, headers }),
  };
}

// Optional: Export default instance for app-wide use
const api = Fetcher('/api');
export default api;
