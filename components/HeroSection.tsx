import { Player } from "@lottiefiles/react-lottie-player";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300  flex flex-col items-center justify-center md:flex-row px-4 md:px-16">
      <div className="md:w-1/2 text-center">
        <header className="text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to Your Banking Insights
        </header>
        <main className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
          <p>
            At Valyx, we empower businesses with valuable insights from their
            bank account statements.
          </p>
          <p>Use our tools to search, analyze, and make informed decisions.</p>
        </main>
      </div>

      <div className="md:w-1/2 flex items-center justify-center">
        <Player
          src="/animations/anime1.json"
          className="player"
          loop
          autoplay
          style={{ maxWidth: "80%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
