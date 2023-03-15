import {
  Header,
  ProductSection,
  NewsSection,
  AboutSection,
  Footer,
} from "./Components/Index";

function App() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <div className="w-full h-[2.2rem] bg-[#239e48]"></div>
      <Header />
      <ProductSection />
      <NewsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
