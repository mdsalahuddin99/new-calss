import ProductList from "../../features/Product/productList";
import Footer from "./Footer";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";

function MainSection() {
  return (
    <>
    <Header />
    <div className="h-[calc(100vh-110px)]">
     <div className="flex relative h-[calc(100vh-110px)]">
      <LeftSidebar />
     <ProductList></ProductList>
     </div>
    </div>
    <Footer />
    </>
  )
}

export default MainSection;
