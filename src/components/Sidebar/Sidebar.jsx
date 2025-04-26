import { Link } from "react-router-dom"; // Import Link for routing
import Onboarding from "../OnBoarding/Onboarding";
import Home from "../../pages/Home";
import ItineraryDetails from "../ItineraryDetails/ItineraryDetails";

const Sidebar = () => {
    return (
      <div className="w-64 bg-white shadow-md h-screen p-4">
        <h1 className="text-xl font-bold mb-8">Travel App</h1>
        <nav className="flex flex-col gap-4">
          <Link className="text-gray-700" to="/home">
            Home    
            </Link>
            <Link to="/itineraryList" className="text-gray-700">    
            Itinerary List
            </Link>
            <Link to="/trips" className="text-gray-700">
            Trips
            </Link>

          <Link to="/onboarding" className="text-gray-700">
            Onboarding
          </Link>
        </nav>
      </div>
    );
};

export default Sidebar;
