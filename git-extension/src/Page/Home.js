import React from "react";
import ChatContainer from "../Components/ChatContainer";
import Mobile from "../Components/Mobile";
import SideNav from "../Components/SideNav";

function Home() {
  return (
    <div className="flex w-screen relative">
      <SideNav />
      <ChatContainer />
      <span className="flex lg:hidden">
        <Mobile />
      </span>
    </div>
  );
}

export default Home;
