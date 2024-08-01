import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="bg-primary">
        <img src="images/banner.jpeg" alt="top banner" className="w-full" />
        <div className="p-5">
          <div className="relative float-start w-full">
            <img
              src="images/logo.png"
              className="w-[5%] absolute top-[-50px]"
              alt="header logo"
            />
          </div>
          <span className="text-secondary font-KolkerBrush ml-28 text-7xl">
            My Diary
          </span>
          <div className="text-white font-aclonica text-lg mt-6 mb-6">
            Welcome to My Diary – Your Personal Journey to Happiness
          </div>
          <p className="text-white font-cardo w-[80%]">
            At My Diary, we believe that every day holds a unique story worth
            cherishing. Our platform is designed to help you capture life's
            moments, big and small, while fostering a mindset of positivity and
            gratitude. Whether you're recording your daily adventures,
            reflecting on personal growth, or simply jotting down thoughts, My
            Diary is your trusted companion on the path to joy.
          </p>
        </div>
      </div>
      <Header />
      <Outlet />
      <div className=" bg-[#704c3c] text-center text-white font-aclonica">
        My Diary – Always Be Happy
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
