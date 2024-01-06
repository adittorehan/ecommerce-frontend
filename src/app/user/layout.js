import NavBar from "../ui/NavBar";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
};

export default Layout;