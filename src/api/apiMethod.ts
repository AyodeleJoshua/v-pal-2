const getRequest = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

export default getRequest;
