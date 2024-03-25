import { put, takeLatest } from "redux-saga/effects";
import { GET_ALL_NEWS_START, GET_CATEGORY_NEWS_START } from "../constants/news.constant";
import { getNewsFromApi } from "../service/news.service";
import { getCategoryNewsError, getCategoryNewsSuccess, getNewsError, getNewsSuccess } from "../actions/news.action";

function* getNews() {
  try {
    let result = yield getNewsFromApi();
    yield put(getNewsSuccess(result));
  } catch (error) {
    yield put(getNewsError(error.message))
  }
}

function* getCategoryNews({payload}) {
  try {
    let result = yield getNewsFromApi(payload);
    yield put(getCategoryNewsSuccess(result));
  } catch (error) {
    yield put(getCategoryNewsError(error.message))
  }
}
export default function* news() {
  yield takeLatest(GET_ALL_NEWS_START, getNews);
  yield takeLatest(GET_CATEGORY_NEWS_START, getCategoryNews)
}
  