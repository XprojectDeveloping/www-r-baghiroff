import { AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <AnimatePresence>{children}</AnimatePresence>
      <Footer />
    </>
  );
}
export default Layout;
