import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ArtisanList from "./pages/ArtisanList";

import MentionsLegales from "./pages/legal/MentionsLegales";
import DonneesPersonnelles from "./pages/legal/DonneesPersonnelles";
import Accessibilite from "./pages/legal/Accessibilite";
import Cookies from "./pages/legal/Cookies";
import ArtisanDetail from "./pages/ArtisanDetail";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminArtisans from "./pages/admin/AdminArtisans";
import AdminCreateArtisan from "./pages/admin/AdminCreateArtisan";
import AdminEditArtisan from "./pages/admin/AdminEditArtisan";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/artisans" element={<ArtisanList />} />
          <Route path="/categorie/:slug" element={<ArtisanList />} />
          <Route path="/artisans/:id" element={<ArtisanDetail />} />

          {/* Pages légales */}
          <Route path="/legal/mentions-legales" element={<MentionsLegales />} />
          <Route
            path="/legal/donnees-personnelles"
            element={<DonneesPersonnelles />}
          />
          <Route path="/legal/accessibilite" element={<Accessibilite />} />
          <Route path="/legal/cookies" element={<Cookies />} />



          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Pages admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/artisans" element={<AdminArtisans />} />
        <Route path="/admin/artisans/create" element={<AdminCreateArtisan />} />
        <Route path="/admin/artisans/:id/edit" element={<AdminEditArtisan />} />
      </Routes>
    </BrowserRouter>
  );
}