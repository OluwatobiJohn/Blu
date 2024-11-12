import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const viteEnvs = import.meta.env;
const apiBaseUrl = viteEnvs.VITE_BASE_QUERY;

console.log("API", apiBaseUrl);

export const DashboardApi = createApi({
  reducerPath: "DashboardApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    sendEmailVerification: builder.mutation({
      query: (data) => ({
        url: "/authentication/test/",
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const { useSendEmailVerificationMutation } = DashboardApi;
