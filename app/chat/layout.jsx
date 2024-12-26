import Groups from "../components/Groups";

const Layout = ({ children }) => {
  return (
    <>
      <section className="grid grid-cols-3 gap-2">
        <div className="col-span-1  rounded-lg p-2">
          <Groups />
        </div>
        <div className="col-span-2  rounded-lg p-2">{children}</div>
      </section>
    </>
  );
};

export default Layout;
