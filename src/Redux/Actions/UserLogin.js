import * as Type from '../Types';

export const userLogin = (formData) => {
  return {
    type: Type.USER_DATA_REQUEST,
    payload: formData,
  }
}