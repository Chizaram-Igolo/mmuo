import Banner from "./banner";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <div className="">
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
