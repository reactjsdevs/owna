import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import MyProfile from "./components/pages/MyProfile/MyProfile";
import AppointeMentInfo from "./components/pages/AppointmentInfo/AppointeMentInfo";
import LetsConnect from "./components/pages/LetsConnect/LetsConnect";
import WhatAreYouWillingTodo from "./components/pages/WhatAreYouWillingTodo/WhatAreYouWillingTodo";
import Estimate from "./components/pages/Estimate/Estimate";
import P2poffer from "./components/pages/P2poffer/P2poffer";
import MarketPlace from "./components/pages/MarketPlace/MarketPlace";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Stake from "./components/pages/Stake/Stake";
import MintNft from "./components/BackOffice/MintNft/MintNft";

import Calim from "./components/pages/Calim/Calim";
import BackOfficeEstimate from "./components/BackOffice/BackOfficeEstimate/BackOfficeEstimate";
import SendOffer from "./components/BackOffice/SendOffer/SendOffer";
import FrontPage from "./components/pages/FrontPage/FrontPage";

function App() {
  return (
    <>
      <>
        <Header />
        <Routes>
          {" "}
          <Route path="/" element={<FrontPage />} />
          <Route path="/" element={<FrontPage />} />
          <Route path="/myProfile" element={<MyProfile />}></Route>
          <Route
            path="/whatareyouwillingtodo"
            element={<WhatAreYouWillingTodo />}
          />
          <Route path="/connect" element={<LetsConnect />} />
          <Route
            path="/whatareyouwillingtodo"
            element={<WhatAreYouWillingTodo />}
          />
          <Route path="/appoinment" element={<AppointeMentInfo />} />{" "}
          <Route path="/estimate" element={<Estimate />} />{" "}
          <Route path="/p2poffer" element={<P2poffer />} />
          <Route path="/marketplace" element={<MarketPlace />} />{" "}
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          <Route path="/stakeandclaim" element={<Stake />} />{" "}
          {/* <Route path="/claim" element={<Calim />}></Route> */}
          <Route path="/mintnft" element={<MintNft />} />
          <Route path="/sendestimate" element={<BackOfficeEstimate />} />
          <Route path="/sendoffer" element={<SendOffer />} />
        </Routes>
      </>
    </>
  );
}

export default App;
