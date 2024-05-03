import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }),
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
    }),

    // Создание аренды
    createRental: builder.mutation({
      query: ({ userId, deviceId, subscriptionOptionsId, deliveryMethod }) => ({
        url: `/rentals/create`,
        method: "POST",
        body: { userId, deviceId, subscriptionOptionsId, deliveryMethod },
      }),
    }),

    // Оплата аренды
    payRental: builder.mutation({
      query: ({ rentalId, paymentDetails }) => ({
        url: `/rentals/${rentalId}/pay`,
        method: "POST",
        body: paymentDetails,
      }),
    }),

    // Отмена аренды
    cancelRental: builder.mutation({
      query: (rentalId) => ({
        url: `/rentals/${rentalId}/cancel`,
        method: "POST",
      }),
    }),

    // Завершение аренды
    completeRental: builder.mutation({
      query: (rentalId) => ({
        url: `/rentals/${rentalId}/complete`,
        method: "POST",
      }),
    }),

    // Удаление аренды
    deleteRental: builder.mutation({
      query: (rentalId) => ({
        url: `/rentals/${rentalId}`,
        method: "DELETE",
      }),
    }),

    /// Query
    getUserById: builder.query({
      query: (userId) => ({ url: `/user/${userId}`, method: "GET" }),
    }),

    getCategories: builder.query({
      query: () => ({ url: "/categories", method: "GET" }),
    }),

    getProducts: builder.query({
      query: (categoryId) => ({
        url: `/devices/category/${categoryId}`,
        method: "GET",
      }),
    }),

    getRental: builder.query({
      query: (userId) => ({
        url: `/rentals/?userId=${userId}`,
        method: "GET",
      }),
    }),

    getPayments: builder.query({
      query: (userId) => ({
        url: `/payments/?userId=${userId}`,
        method: "GET",
      }),
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
