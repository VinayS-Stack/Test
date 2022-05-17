import axios from "axios";
import { put, call, takeEvery } from "redux-saga/effects";
import * as Types from "../Types";
const qs = require("qs");

function* workerUserLoginSaga(action) {
  try {
    let formData = action.payload;
    const apiUrl = "https://reqres.in/api/login";
    const headers = {
      "content-Type": "application/x-www-form-urlencoded",
    };
    const userResponse = yield call(
      axios.post,
      apiUrl,
      qs.stringify(formData),
      headers
    );
    yield put({ type: Types.USER_DATA_SUCCESS, userDetails: userResponse });
    console.log(userResponse);
    if (userResponse.status === 200 || userResponse.statusText === "OK") {
      localStorage.setItem("User", JSON.stringify(userResponse.data));
    }
  } catch (error) {
    yield put({ type: Types.USER_DATA_FAILURE, message: error.message });
  }
}

function* watcherUserLoginSaga() {
  yield takeEvery(Types.USER_DATA_REQUEST, workerUserLoginSaga);
}

export default watcherUserLoginSaga;
