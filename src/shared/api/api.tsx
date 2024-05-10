import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }),
  keepUnusedDataFor: 30,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["User", "Categories", "Products", "Rental", "Payments"],
  endpoints: (builder) => ({
    // Mutation
    // Отправка кода
    sendCode: builder.mutation({
      query: (email) => ({
        url: "/login",
        method: "POST",
        body: { email },
      }),
    }),

    // Подтверждение кода
    verifyCode: builder.mutation({
      query: ({ email, code }: { email: string; code: number }) => ({
        url: "/login/verify",
        method: "POST",
        body: { email, code },
      }),
    }),

    // Выход пользователя
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(api.util.invalidateTags(["User"]));
        } catch (error) {
          console.error("Error saving rental data:", error);
        }
      },
    }),

    // Удаление пользователя
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "DELETE",
      }),
    }),

    // Обновление пользователя
    updateUser: builder.mutation({
      query: ({
        userId,
        updatedData,
      }: {
        userId: string;
        updatedData: object;
      }) => ({
        url: `/user/${userId}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["User"],
      onQueryStarted: async (_userId, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(api.util.invalidateTags(["User"]));
        } catch (error) {
          console.error("Error saving user data:", error);
        }
      },
    }),

    // Создание аренды
    createRental: builder.mutation({
      query: ({ userId, deviceId, subscriptionOptionsId, deliveryMethod }) => ({
        url: `/rentals/create`,
        method: "POST",
        body: { userId, deviceId, subscriptionOptionsId, deliveryMethod },
      }),
      invalidatesTags: ["Rental"],
      onQueryStarted: async (_rentalId, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(api.util.invalidateTags(["Rental"]));
        } catch (error) {
          console.error("Error saving rental data:", error);
        }
      },
    }),

    // Оплата аренды
    payRental: builder.mutation({
      query: ({ rentalId, paymentDetails }) => ({
        url: `/rentals/${rentalId}/pay`,
        method: "POST",
        body: paymentDetails,
      }),
      invalidatesTags: ["Rental"],
      onQueryStarted: async (_rentalId, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(api.util.invalidateTags(["Rental"]));
        } catch (error) {
          console.error("Error saving rental data:", error);
        }
      },
    }),

    // Отмена аренды
    cancelRental: builder.mutation({
      query: (rentalId) => ({
        url: `/rentals/${rentalId}/cancel`,
        method: "POST",
      }),
      invalidatesTags: ["Rental"],
      onQueryStarted: async (_rentalId, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(api.util.invalidateTags(["Rental"]));
        } catch (error) {
          console.error("Error saving rental data:", error);
        }
      },
    }),

    // Завершение аренды
    completeRental: builder.mutation({
      query: (rentalId) => ({
        url: `/rentals/${rentalId}/complete`,
        method: "POST",
      }),
      invalidatesTags: ["Rental"],
      onQueryStarted: async (_rentalId, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(api.util.invalidateTags(["Rental"]));
        } catch (error) {
          console.error("Error saving rental data:", error);
        }
      },
    }),

    // Удаление аренды
    deleteRental: builder.mutation({
      query: (rentalId) => ({
        url: `/rentals/${rentalId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Rental"],
      onQueryStarted: async (_rentalId, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(api.util.invalidateTags(["Rental"]));
        } catch (error) {
          console.error("Error saving rental data:", error);
        }
      },
    }),

    /// Query
    getUserById: builder.query({
      query: (userId) => ({ url: `/user/${userId}`, method: "GET" }),
      providesTags: ["User"],
      onQueryStarted: async (_userId, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error("Error saving rental data:", error);
        }
      },
    }),

    getCategories: builder.query({
      query: () => ({ url: "/categories", method: "GET" }),
      keepUnusedDataFor: 60,
      providesTags: ["Categories"],
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error("Error saving rental data:", error);
        }
      },
    }),

    getProducts: builder.query({
      query: (categoryId) => ({
        url: `/devices/category/${categoryId}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),

    getRental: builder.query({
      query: (userId) => ({
        url: `/rentals/?userId=${userId}`,
        method: "GET",
      }),
      providesTags: ["Rental"],
      onQueryStarted: async (_arg, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error("Error saving rental data:", error);
        }
      },
    }),

    getPayments: builder.query({
      query: (userId) => ({
        url: `/payments/?userId=${userId}`,
        method: "GET",
      }),
      providesTags: ["Payments"],
    }),
  }),
});

export const {
  // Mutation
  useSendCodeMutation,
  useVerifyCodeMutation,
  useDeleteUserMutation,
  useLogoutMutation,
  useUpdateUserMutation,
  useCreateRentalMutation,
  usePayRentalMutation,
  useCancelRentalMutation,
  useCompleteRentalMutation,
  useDeleteRentalMutation,

  // Query
  useGetUserByIdQuery,
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetRentalQuery,
  useGetPaymentsQuery,
} = api;
