import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Header from "./components/header";
import Aboutus from "./pages/aboutus";

function App() {
  return (
    <main className="w-full flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <Header />
      <div className="w-full grid grid-cols-2 gap-1">
        <div className="w-full">
          <Routes>
            <Route path="/contactus" element={<Home />}></Route>
            <Route path="/careers" element={<Home />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/*" exact element={<Home />}></Route>
          </Routes>
        </div>
        <div className="w-1/3 justify-items-right">
          <div>We are here to help</div>
          <div>Address:</div>
        </div>
      </div>
    </main>
  );
}

export default App;
