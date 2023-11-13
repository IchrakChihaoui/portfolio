import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Details } from "../pages/portfolio/details";
import { Details2 } from "../pages/portfolio/details2";
import { Details3 } from "../pages/portfolio/details3";
import { Details4 } from "../pages/portfolio/details4";
import { Details5 } from "../pages/portfolio/details5";
import { Details6 } from "../pages/portfolio/details6";
import { Details7 } from "../pages/portfolio/details7";
import { Details8 } from "../pages/portfolio/details8";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/details" element={<Details />} />
        <Route path="/details2" element={<Details2 />} />
        <Route path="/details3" element={<Details3 />} />
        <Route path="/details4" element={<Details4 />} />
        <Route path="/details5" element={<Details5 />} />
        <Route path="/details6" element={<Details6 />} />
        <Route path="/details7" element={<Details7 />} />
        <Route path="/details8" element={<Details8 />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
