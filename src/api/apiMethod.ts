const getRequest = async (): Promise<any> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {};
};

export default getRequest;
