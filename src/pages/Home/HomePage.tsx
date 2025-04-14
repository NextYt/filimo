import Child from "./sections/Child";
import Device from "./sections/Device";
import FreeMovie from "./sections/FreeMovie";
import Hero from "./sections/Hero";
import Main from "./sections/Main";
import Online from "./sections/Online";
import Ques from "./sections/Ques";
import Tab from "./sections/Tab";
import TV from "./sections/TV";
import UserNav from "./sections/UserNav";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Main />
      <Device />
      <TV />
      <FreeMovie />
      <Child />
      <Online />
      <UserNav />
      <Ques />
      <Tab />
    </>
  );
};

export default HomePage;
