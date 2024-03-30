import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FoodLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
