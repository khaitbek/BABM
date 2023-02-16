import { lazy, Suspense, useEffect } from 'react';
// import { token } from "./api";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PacmanLoader } from "react-spinners";
import AdminNews from "./pages/Admin/pages/News/News";
import AdminPartner from "./pages/Admin/pages/Partner";
const Loader = lazy(() => import("./components/Loader")); 
const AddNews = lazy(() => import("./pages/Admin/pages/AddNews")) ;
const NewCourse = lazy(() => import("./pages/Admin/pages/NewCourse/NewCourse")) ;
const FormPageWrapper = lazy(() => import("./components/FormPageWrapper")) ;
const NewPartner = lazy(() => import("./pages/Admin/pages/NewPartner/NewPartner")) ;
const NewFile = lazy(() => import("./pages/Admin/pages/NewFile/NewFile")) ;
const Course = lazy(() => import("./pages/Admin/pages/Course")) ;
const AdminCourse = lazy(() => import("./pages/Admin/pages/Course/Course"));

const Home = lazy(() => import("./pages/Home"));
const Admin = lazy(() => import("./pages/Admin"));
const Login = lazy(() => import("./pages/Login"));

const token = localStorage.getItem("babm_token");

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<Suspense fallback={<><Loader /></>}>
			<Routes>

				<Route element={<RootLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="login" element={token ? <Navigate to="/admin" replace={true} /> : <Login />} />
					{/* <Route path="courses" element={<Course />} /> */}
				</Route>
				<Route path="admin" element={<Admin />}>
					<Route path="courses" element={<AdminCourse />} />
					<Route path="news" element={<AdminNews />} />
					<Route path="partners" element={<AdminPartner />} />
				</Route>
				<Route path="add" element={<FormPageWrapper />}>
					<Route path="news" element={<AddNews />} />
					<Route path="course" element={<NewCourse />} />
					<Route path="partner" element={<NewPartner />} />
					<Route path="file" element={<NewFile />} />
				</Route>
				<Route path="edit" element={<FormPageWrapper />}>
					<Route path="news/:id" element={<AddNews />} />
					<Route path="courses/:id" element={<NewCourse />} />
					<Route path="partners/:id" element={<NewPartner />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
