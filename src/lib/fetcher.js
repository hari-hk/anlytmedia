export function Fetcher(baseURL = '', defaultOptions = {}) {
  const TIMEOUT = 10000; // 10 seconds

  async function makeFetch(endpoint, options = {}) {
    const url = `${baseURL}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

    const headers = {
      'Content-Type': 'application/json',
      ...(defaultOptions.headers || {}),
      ...(options.headers || {}),
    };

    const config = {
      method: options.method || 'GET',
      headers,
      signal: controller.signal,
      body: options.body ? JSON.stringify(options.body) : undefined,
      ...options,
    };

    try {
      const res = await fetch(url, config);
      clearTimeout(timeoutId);

      const contentType = res.headers.get('content-type');
      const data = contentType?.includes('application/json')
        ? await res.json()
        : await res.text();

      if (!res.ok) {
        throw new Error(data?.error || res.statusText);
      }

      return data;
    } catch (error) {
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
    get: (endpoint, headers = {}) =>
      makeFetch(endpoint, {
        method: 'GET',
        headers,
      }),

    post: (endpoint, body = {}, headers = {}) =>
      makeFetch(endpoint, {
        method: 'POST',
        body,
        headers,
      }),

    patch: (endpoint, body = {}, headers = {}) =>
      makeFetch(endpoint, {
        method: 'PATCH',
        body,
        headers,
      }),

    delete: (endpoint, body = {}, headers = {}) =>
      makeFetch(endpoint, {
        method: 'DELETE',
        body,
        headers,
      }),
  };
}

const api = Fetcher('/api');

export default api;
