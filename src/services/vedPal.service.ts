import getRequest from '../api/apiMethod';

const getAllData = (): Promise<void> => getRequest();

export default getAllData;
