import { Routes, Route } from "react-router-dom"

import Homepage from "../pages/Homepage";
import DashboardPage from "../pages/DashboardPage";
import { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import PostsPage, { Post, PostList } from "../pages/PostsPage"
import ProtectedRoute from "../routes/ProtectedRoute";
import LoginForm from "../components/LoginForm";

function AppRoutes(props) {

    return (
        <Routes>

            <Route index element={<Homepage {...props} />} />

            <Route path="dash" element={<ProtectedRoute>
                <DashboardPage {...props} /></ProtectedRoute>}>
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>
            

            <Route path='/about' element={<AboutPage {...props} />} />

            <Route path="*" element={<PageNotFound />} />

            <Route path='/posts' element={<PostsPage {...props} />} >
                <Route index element={<PostList />} />
                {/* dynamic param taken from route, stored in variable called id*/}
                <Route path=":id" element={<Post />} />
            </Route>
            <Route path="login" element={<LoginForm />} />

        </Routes>
    )
}

export default AppRoutes
