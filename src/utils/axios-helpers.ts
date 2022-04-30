export const transformRequestOptions = (params: {[x: string]: any[]}) => {
  let options = '';
  for (const key in params) {
    if (typeof params[key] !== 'object' && params[key]) {
      options += `${key}=${params[key]}&`;
    } else if (
      typeof params[key] === 'object' &&
      params[key] &&
      params[key].length
    ) {
      params[key].forEach((el: any) => {
        options += `${key}=${el}&`;
      });
    }
  }
  return options ? options.slice(0, -1) : options;
};
