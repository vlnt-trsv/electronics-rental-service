import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCategory } from "../redux/slices/categoriesSlice";
import { setProducts } from "../redux/slices/productsSlice";
import { setUser } from "../redux/slices/user/userSlice";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }),
  keepUnusedDataFor: 5,
  refetchOnFocus: true,
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
        keepUnusedDataFor: 0,
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
      async onQueryStarted(_data: any, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.user));
        } catch (err) {
          dispatch(setUser("Error get user!"));
        }
      },
    }),

    getCategories: builder.query({
      query: () => ({ url: "/categories", method: "GET" }),
      async onQueryStarted(_data: any, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCategory(data));
        } catch (err) {
          dispatch(setCategory("Error get category!"));
        }
      },
    }),

    getProducts: builder.query({
      query: (categoryId) => ({
        url: `/devices/category/${categoryId}`,
        method: "GET",
      }),
      async onQueryStarted(_data: any, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProducts(data?.devices));
        } catch (err) {
          dispatch(setProducts("Error get products!"));
        }
      },
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

// console.log("All SID", JSON.stringify(Cookies.get(), null, 2));

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
