import Footer from "./Footer";
import Navbar from "./Navbar";

const Shell = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Shell;
