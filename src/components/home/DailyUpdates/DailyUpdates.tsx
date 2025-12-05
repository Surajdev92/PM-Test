import React, { useState } from "react";
import Container from "../../common/Container";
import coverImage from "../../../assets/images/cover.png";
import mediaBgCover from "../../../assets/images/media bg-cover.png";
import mediaBgCover1 from "../../../assets/images/media bg-cover1.png";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
          aria-label="Close video"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const DailyUpdates: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleReadMore = () => {
    // Navigate to article detail page
    window.location.href = "#article-detail";
  };

  const handleViewAll = () => {
    // Navigate to full updates listing page
    window.location.href = "#updates-listing";
  };

  const handlePlayVideo = () => {
    setIsVideoModalOpen(true);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12 gap-4">
          <div>
            <p className="text-primary font-semibold text-xs sm:text-sm md:text-base mb-2">
              Daily Updates
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
              Everything you need to trade the markets
            </h2>
          </div>
          <a
            href="#updates-listing"
            onClick={(e) => {
              e.preventDefault();
              handleViewAll();
            }}
            className="flex items-center gap-2 text-primary font-semibold text-sm md:text-base hover:text-primary-600 transition-colors self-start sm:self-center"
          >
            View all
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Left Side - News Card */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden lg:col-span-4">
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
              <img
                src={coverImage}
                alt="Market News"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <p className="text-neutral-500 text-xs sm:text-sm mb-2">
                March 15, 2024
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-3">
                Market Analysis: Key Trends to Watch This Week
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base mb-4 leading-relaxed">
                Discover the latest market movements and expert insights on
                currency pairs, commodities, and indices that could impact your
                trading strategy.
              </p>
              <a
                href="#article-detail"
                onClick={(e) => {
                  e.preventDefault();
                  handleReadMore();
                }}
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base hover:text-primary-600 transition-colors"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Right Side - Featured Video Card */}
          <div className="relative rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group lg:col-span-8">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-full lg:min-h-[500px]">
              <img
                src={mediaBgCover}
                alt="Featured Video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

              {/* Play Button Overlay */}
              <button
                onClick={handlePlayVideo}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Play video"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom - Full-Width Featured Banner Card */}
        <div className="relative rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="relative w-full h-56">
            <img
              src={mediaBgCover1}
              alt="Featured Article"
              className="w-full h-full object-fill"
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 max-w-4xl">
                Premier Market - Market Cap Weighted PR (BKP)
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mb-4 sm:mb-6">
                Stay ahead of the latest tech trends with our algorithmically
                selected portfolio of the 15 top tech stocks each month.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="text-white text-xs sm:text-sm font-medium">
                  Google
                </span>
                <span className="text-white/60">•</span>
                <span className="text-white text-xs sm:text-sm font-medium">
                  Trending
                </span>
                <span className="text-white/60">•</span>
                <span className="text-white text-xs sm:text-sm font-medium">
                  investing.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
};

export default DailyUpdates;
