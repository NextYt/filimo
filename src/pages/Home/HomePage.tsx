import Child from "./components/Child";
import Device from "./components/Device";
import FreeMovie from "./components/FreeMovie";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Online from "./components/Online";
import Ques from "./components/Ques";
import Tab from "./components/Tab";
import TV from "./components/TV";
import UserNav from "./components/UserNav";

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
