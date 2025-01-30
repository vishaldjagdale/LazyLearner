import { useGetCourseDetailWithStatusQuery } from "@/features/api/purchaseApi";

import { useParams, Navigate } from "react-router-dom";

// Protected route for purchased courses this routes will only be accessible if the course is purchased
const PurchaseCourseProtectedRoute = ({children}) => {
    const {courseId} = useParams();
    const {data, isLoading} = useGetCourseDetailWithStatusQuery(courseId);

    if(isLoading) return <p>Loading...</p>

    return data?.purchased ? children : <Navigate to={`/course-detail/${courseId}`}/>
}
export default PurchaseCourseProtectedRoute;