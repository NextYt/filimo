import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NotificationsContainer from "../components/Notifications/NotificationsContainer";
import "../style/layout.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <NotificationsContainer />
    </>
  );
};

export default MainLayout;
