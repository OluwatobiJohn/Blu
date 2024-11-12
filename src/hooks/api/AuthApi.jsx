import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const viteEnvs = import.meta.env;
const apiBaseUrl = viteEnvs.VITE_BASE_QUERY;

console.log("API", apiBaseUrl);

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
    // prepareHeaders: (headers) => {
    //   const token = Cookies.get("tgr_jwt");
    //   if (token) {
    //     headers.set("Authorization", `JWT ${token}`);
    //   }
    //   return headers;
    // },
  }),
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

export const { useSendEmailVerificationMutation } = AuthApi;
