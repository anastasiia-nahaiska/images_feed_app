import { getPage } from '../../utils/fetch';

const IMAGES_BASE_URL = 'https://picsum.photos8';
const IMAGES_LIST_URL = '/v2/list';
const LIMIT = 3;

export const getImagesPage = (page: number) => {
  return getPage(`${IMAGES_BASE_URL}${IMAGES_LIST_URL}`, page, LIMIT);
};
