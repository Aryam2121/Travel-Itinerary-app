import { useState } from "react";
import { MapPin, Calendar, User, Users } from "lucide-react";

const travelOptions = [
  { label: "Solo", icon: <User size={20} /> },
  { label: "Couple", icon: <Users size={20} /> },
  { label: "Family", icon: <Users size={20} /> },
  { label: "Friends", icon: <Users size={20} /> },
];

const Onboarding = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      {/* Theme Wrapper */}
      <div className="min-h-screen flex flex-col justify-center px-6 py-8 bg-white dark:bg-gradient-to-b dark:from-[#0E0E0E] dark:to-[#1C1C1C] text-black dark:text-white transition-colors duration-500">
        {/* Toggle Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="max-w-md w-full mx-auto space-y-6">
          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Plan Your Journey, Your Way!</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Let’s create your personalised travel experience
            </p>
          </div>

          {/* Enter Destination */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Where would you like to go?</label>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3">
              <MapPin size={20} className="text-gray-400 dark:text-gray-300" />
              <input
                type="text"
                placeholder="Enter Destination"
                className="bg-transparent outline-none text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 w-full"
              />
            </div>
          </div>

          {/* Select Duration */}
          <div className="space-y-1">
            <label className="text-sm font-medium">How long will you stay?</label>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3">
              <Calendar size={20} className="text-gray-400 dark:text-gray-300" />
              <select className="bg-transparent text-black dark:text-white w-full outline-none appearance-none">
                <option className="bg-white dark:bg-gray-700">Select Duration</option>
                <option className="bg-white dark:bg-gray-700">1-3 Days</option>
                <option className="bg-white dark:bg-gray-700">4-7 Days</option>
                <option className="bg-white dark:bg-gray-700">1-2 Weeks</option>
              </select>
            </div>
          </div>

          {/* Who are you traveling with */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Who are you traveling with?</label>
            <div className="grid grid-cols-2 gap-4">
              {travelOptions.map((option) => (
                <button
                  key={option.label}
                  className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg py-3 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  {option.icon}
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-3 rounded-full transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
