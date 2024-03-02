import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = ({ children, className = "" }) => {
  return (
    <main
      className={`scroll-smooth relative overflow-hidden ${
        className && className
      }  `}
    >
      <Header />
      {children}
      <Footer />
    </main>
  );
};
