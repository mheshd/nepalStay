import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import HomePage from "./pages/HomePage";

const ContactPage = lazy(() => import("./pages/ContactPage"));

const GalleryPage = lazy(() => import("./pages/GalleryPage"));

const RoomDetailPage = lazy(() => import("./pages/RoomDetailPage"));
const RoomsPage = lazy(() => import("./pages/RoomsPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));

function AppRoutes() {
  return (
    <main className="min-h-screen bg-white font-sans text-stone-900">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/:slug" element={<RoomDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
