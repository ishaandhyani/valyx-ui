import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChartLine } from "@fortawesome/free-solid-svg-icons";

const BodySection = () => {
  return (
    <div className="bg-pink-400 py-12">
      <div className="text-center">
        <p className="text-3xl text-blue-900 mb-8">
          Unlock the power of financial insights with Valyx.
        </p>
        <div className="space-y-6">
          <a
            href="/search"
            className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-full shadow-md text-lg transition duration-300 inline-block"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Get Started with Search
          </a>
          <a
            href="/trend"
            className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-full shadow-md text-lg transition duration-300 inline-block"
          >
            <FontAwesomeIcon icon={faChartLine} className="mr-2" />
            Explore Trend Analysis
          </a>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
