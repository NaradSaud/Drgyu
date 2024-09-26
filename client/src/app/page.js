'use client';
export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
          Welcome to <span className="text-blue-600">E-Medical & Home Remedy</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Your trusted partner for healthcare advice and natural home remedies.
        </p>
        <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transform transition-transform duration-300 hover:scale-105">
          Evaluate Disease
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-800">
              About Us
            </h2>
            <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
              We provide the best health tips, advice, and home remedies to help you lead a healthier life. 
              Our mission is to offer reliable, natural, and medical advice for all.
            </p>
          </div>
          <img
            src="/images/healthcare.jpg"
            alt="Healthcare"
            className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Articles/Remedies Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Explore Our Latest Health Tips
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12 px-4 md:px-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/remedy1.jpg" alt="Remedy 1" className="w-full rounded-t-lg object-cover h-48" />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Home Remedy for Cold</h3>
            <p className="mt-2 text-gray-600">Learn how natural ingredients can help soothe common cold symptoms.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold">
              Read More &rarr;
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/remedy2.jpg" alt="Remedy 2" className="w-full rounded-t-lg object-cover h-48" />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Boost Your Immunity</h3>
            <p className="mt-2 text-gray-600">Explore tips to naturally strengthen your immune system.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold">
              Read More &rarr;
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/remedy3.jpg" alt="Remedy 3" className="w-full rounded-t-lg object-cover h-48" />
            <h3 className="text-xl font-bold text-blue-800 mt-4">Herbal Teas for Stress</h3>
            <p className="mt-2 text-gray-600">Discover the calming effects of different herbal teas.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold">
              Read More &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
