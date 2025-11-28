import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccessGate from "./components/AccessGate";
import MainPage from "./pages/MainPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <AccessGate>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-white">

        <Header />

        <main className="flex-1 container mx-auto p-4">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
      </AccessGate>
  );
}

export default App;
