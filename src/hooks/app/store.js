import { configureStore } from "@reduxjs/toolkit";
import { DashboardApi } from "../api/DashboardApi";
import { AuthApi } from "../api/AuthApi";

export const store = configureStore({
  reducer: {
    // Add the api reducer to the store
    [DashboardApi.reducerPath]: DashboardApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(DashboardApi.middleware, AuthApi.middleware),
});
