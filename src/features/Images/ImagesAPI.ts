import { getPage } from '../../utils/fetch';

const IMAGES_BASE_URL = 'https://picsum.photos';
const IMAGES_LIST_URL = '/v2/list';

export const getImagesPage = (page: number, limit: number) => {
  return getPage(`${IMAGES_BASE_URL}${IMAGES_LIST_URL}`, page, limit);
};
