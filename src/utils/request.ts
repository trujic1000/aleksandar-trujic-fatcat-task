export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function request<TResponse extends object>(
    url: string,
    config: RequestInit = {}
): Promise<TResponse> {
    const response = await fetch(BASE_URL + url, config);

    if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
    }

    const jsonResponse = (await response.json()) as TResponse;
    return jsonResponse;
}
