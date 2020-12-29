import { takeEvery, call, put } from "redux-saga/effects";
import { types } from "../types";
import axios from "axios";
import { fetchDataSuccess } from "../action";

function* asyncFetchRequest(action) {
  try {
    const url = `https:/reqres.in/api/user/${action.payload}`;
    const response = yield call(() => axios.get(url));
    console.log(response);
    // yield put(fetchDataSuccess(response.data.data.name));
    yield put({
      type: types.SEND_REQUEST_SUCCESS,
      payload: response.data.data.name,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchDataSaga() {
  yield takeEvery(types.SEND_REQUEST, asyncFetchRequest);
}
