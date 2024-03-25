import { configureStore } from "@reduxjs/toolkit";
import { NewsReducer } from "../reducer/news.reducer";
import createSagaMiddleware from "redux-saga";
import news from "../saga/news.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: NewsReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production" ? true : false,
});

sagaMiddleware.run(news);
