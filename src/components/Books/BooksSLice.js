import api from "../../store/api";
// import { createSlice } from "@reduxjs/toolkit";


const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['Book'],
      
    }),
    getBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
      providesTags: ['Book'],
      
    }),
    getBookReservations: builder.query({
      query: () => '/reservations',
      providesTags: ['Reservation'],
      
    }),
    deleteBookReservations: builder.mutation({
      query: (reservationId) => ({
        url: `/reservations/${reservationId}`,
        method: "DELETE",
      }),
      providesTags: ['Reservation'],
      
    }),
    checkoutBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body: {availability: false},
      }),
      invalidatesTags: ['Book', "Reservation"],
      
    }),
    checkInBook: builder.mutation({
      query: (id) => ({
        url: `reservations/${id}`,
        method: 'DELETE',
      }), 
      invalidatesTags: ["Reservation"],
      
    }),
  }),
});

export const {
  useGetBookReservationsQuery,
  useDeleteBookReservationsMutation,
  useCheckoutBookMutation,
  useCheckInBookMutation,
  useGetBooksQuery,
  useGetBookQuery,
} = bookApi;