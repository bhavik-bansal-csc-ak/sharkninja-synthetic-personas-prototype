import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SimulationsPage from "./pages/SimulationsPage";
import SimulationDetailPage from "./pages/SimulationDetailPage";
import NewSimulationPage from "./pages/NewSimulationPage";
import PersonasPage from "./pages/PersonasPage";
import PersonaDetailPage from "./pages/PersonaDetailPage";
import InsightsPage from "./pages/InsightsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/simulations" replace />} />
        <Route path="simulations" element={<SimulationsPage />} />
        <Route path="simulations/:id" element={<SimulationDetailPage />} />
        <Route path="new" element={<NewSimulationPage />} />
        <Route path="personas" element={<PersonasPage />} />
        <Route path="personas/:slug" element={<PersonaDetailPage />} />
        {/* <Route path="insights" element={<InsightsPage />} /> */}
        <Route path="*" element={<Navigate to="/simulations" replace />} />
      </Route>
    </Routes>
  );
}
