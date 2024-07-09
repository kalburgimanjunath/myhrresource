import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Header from "./components/header";
import Aboutus from "./pages/aboutus";
import Careers from "./pages/careers";
import Contactus from "./pages/contactus";
import Footer from "./components/footer";

function App() {
  return (
    <main className="flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <Header />
      <div className="flex">
        <div className="flex-col max-w-[900px]">
          <Routes>
            <Route path="/contactus" element={<Contactus />}></Route>
            <Route path="/careers" element={<Careers />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/*" exact element={<Home />}></Route>
          </Routes>
        </div>
        <div className="flex-col">
          <div>We are here to help</div>
          <div>Address:</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
