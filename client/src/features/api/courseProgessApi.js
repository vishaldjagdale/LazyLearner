import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define the base url for the course progress api
const COURSE_PROGRESS_API = "http://localhost:8080/api/v1/progress";

// create a new api using createApi
export const courseProgressApi = createApi({
    reducerPath: "courseProgressApi",
    baseQuery: fetchBaseQuery({
        baseUrl: COURSE_PROGRESS_API,
        credentials: "include",
    }),
    // using builder to define the endpoints we are not sending any data to the server
    endpoints: (builder) => ({
        getCourseProgress: builder.query({
            query: (courseId) => ({
                url: `/${courseId}`,
                method: "GET",
            }),
        }),

        // this rtk query for updating the lecture progress
        updateLectureProgress: builder.mutation({
            query: ({ courseId, lectureId }) => ({
                url: `/${courseId}/lecture/${lectureId}/view`,
                method: "POST",
            }),
        }),
        // this rtk mutation for marking the course as completed
        completeCourse: builder.mutation({
            query: (courseId) => ({
                url: `/${courseId}/complete`,
                method: "POST",
            }),
        }),

        // this rtk mutation for marking the course as incompleted
        inCompleteCourse: builder.mutation({
            query: (courseId) => ({
                url: `/${courseId}/incomplete`,
                method: "POST",
            }),
        }),
    }),
});
export const {
    useGetCourseProgressQuery,
    useUpdateLectureProgressMutation,
    useCompleteCourseMutation,
    useInCompleteCourseMutation,
} = courseProgressApi;