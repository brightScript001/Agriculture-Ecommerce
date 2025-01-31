export const apiRequest = async <T>(
  url: string,
  method: string,
  body?: any
): Promise<T> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication token is missing");
  }

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new Error(`Failed to ${method} data from ${url}`);
  }

  const response: { success: boolean; data: T } = await res.json();
  if (!response.success) {
    throw new Error(
      `Unexpected API response format: ${method} data is invalid`
    );
  }

  return response.data;
};
