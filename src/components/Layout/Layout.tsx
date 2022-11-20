import { useState, ReactNode } from "react";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Backdrop from "../Backdrop";
import SideDrawer from "@components/SideDrawer";
// import { MetaTags } from "../PropTypes/Tags";
// import Meta from "../Meta";

interface Props {
  // metaTags: MetaTags;
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const getBackdrop = () =>
    sideDrawerOpen && <Backdrop click={backdropClickHandler} />;

  return (
    <>
      {/* <Meta tags={metaTags} /> */}
      <Nav
        drawerToggleClickHandler={drawerToggleClickHandler}
        sideDrawerOpen={sideDrawerOpen}
      />
      <SideDrawer show={sideDrawerOpen} click={backdropClickHandler} />
      {getBackdrop()}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
