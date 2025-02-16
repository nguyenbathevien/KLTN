import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
