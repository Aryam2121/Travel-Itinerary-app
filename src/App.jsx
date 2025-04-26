import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Onboarding from "./components/OnBoarding/Onboarding";
import Home from "./pages/Home";
import ItineraryDetails from "./components/ItineraryDetails/ItineraryDetails";
import ThirdPane from "./components/ThirdPane/ThirdPane";
import "./App.css";
import "./index.css";
import ItineraryList from "./components/ItineraryList/ItineraryList";

const App = () => {
  const location = useLocation();

  // Define the routes where you don't want to show the sidebar
  const hideSidebarRoutes = ["/onboarding"]; // Example: hide sidebar on /onboarding

  return (
    <div className="flex">
      {/* Conditionally render Sidebar based on the current route */}
      {!hideSidebarRoutes.includes(location.pathname) && <Sidebar />}
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> 

          <Route path="/itineraryList" element={<ItineraryList />} />
          <Route path="/trips" element={<ItineraryList />} />
          <Route path="/thirdpane" element={<ThirdPane />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
