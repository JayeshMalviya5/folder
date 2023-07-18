export const ADDFOLDER = "ADDFOLDER";
export const addFolder = (payload) => {
  return {
    type: ADDFOLDER,
    payload: payload,
  };
};
