const get = async (url: string) => {
  const response = await fetch(`${url}`);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};

export const getPage = async (url: string, page: number, limit: number) => {
  return get(`${url}?page=${page}&limit=${limit}`);
};
