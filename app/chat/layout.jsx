import AppNavbar from "./components/AppNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <AppNavbar />
      {children}
    </>
  );
};

export default Layout;
