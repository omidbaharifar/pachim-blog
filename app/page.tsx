import Header from "@/layouts/header";
import HomeContent from "@/domain/home";
import Footer from "@/layouts/footer";

const HomePage = () => {
  return (
    <div className="text-black text-base">
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default HomePage;
