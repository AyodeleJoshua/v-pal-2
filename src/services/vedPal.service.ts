import getRequest from '../api/apiMethod';

const getAllData = <T>(): Promise<T> => getRequest();

export default getAllData;
