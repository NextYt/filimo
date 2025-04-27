import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import NotificationsContainer from "../components/Notifications/NotificationsContainer";
import "../style/layout.css";
import { useFilimoMotor } from "../context";
import { useEffect } from "react";

const MainLayout = () => {
  // if the modal open the body overflow should be hidden
  const { state } = useFilimoMotor();
  useEffect(() => {
    if (state.isMotorOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state.isMotorOpen]);
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      {/* <NotificationsContainer /> */}
    </>
  );
};

export default MainLayout;
