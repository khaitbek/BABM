import { lazy, Suspense, useEffect } from 'react';
// import { token } from "./api";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PacmanLoader } from "react-spinners";
import AdminNews from "./pages/Admin/pages/News/News";
import AdminPartner from "./pages/Admin/pages/Partner";
import AdminFiles from "./pages/Admin/pages/Files";
import SidebarNews from "./pages/Home/components/SidebarNews";
import NewsPage from "./pages/Home/pages/NewsPage";
import SingleNews from "./pages/Home/SingleNews";
import Spheres from "./pages/Home/pages/Spheres/Spheres";
import About from "./pages/Home/pages/About/About";
import Staff from "./pages/Home/pages/Staff";
import School from "./pages/Home/pages/School";
const Loader = lazy(() => import("./components/Loader"));
const AddNews = lazy(() => import("./pages/Admin/pages/AddNews"));
const NewCourse = lazy(() => import("./pages/Admin/pages/NewCourse/NewCourse"));
const FormPageWrapper = lazy(() => import("./components/FormPageWrapper"));
const NewPartner = lazy(() => import("./pages/Admin/pages/NewPartner/NewPartner"));
const NewFile = lazy(() => import("./pages/Admin/pages/NewFile/NewFile"));
const Course = lazy(() => import("./pages/Admin/pages/Course"));
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
					<Route >
						<Route path="/" element={<Home />} />
						<Route path="login" element={token ? <Navigate to="/admin" replace={true} /> : <Login />} />
					</Route>
					<Route path="/spheres" element={<Spheres />} />
					<Route path="/news" element={<NewsPage />}>
						<Route path=":id" element={<SingleNews />} />
					</Route>
					<Route path="/about" element={<About />} />
					<Route path="/staff" element={<Staff />} />
					<Route path="/school" element={<School />} />
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
				<Route path="admin" element={<Admin />} >
					<Route path="courses" key="course" element={<AdminCourse />} />
					<Route path="news" key="news" element={<AdminNews />} />
					<Route path="partners" key="partner" element={<AdminPartner />} />
					<Route path="files" key="file" element={<AdminFiles />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
