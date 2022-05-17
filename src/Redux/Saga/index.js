import { all } from "redux-saga/effects";
import watcherUserLoginSaga from "./UserLoginSaga";

export default function* rootSaga() {
  yield all([watcherUserLoginSaga()]);
}
