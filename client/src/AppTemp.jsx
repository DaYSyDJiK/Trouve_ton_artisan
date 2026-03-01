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
      </Routes>
    </BrowserRouter>
  );
}