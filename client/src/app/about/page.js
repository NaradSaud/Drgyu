'use client'; // To indicate a client-side component

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-200 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
          About Us
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Discover more about our mission, vision, and the people behind E-Medical & Home Remedy. We're committed to providing you with reliable health advice and home remedies.
        </p>
      </section>

      {/* Mission, Vision, and Values Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to improve lives by providing the best health tips and trusted home remedies that are easy to implement and highly effective.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We envision a world where everyone has access to trusted health knowledge and natural remedies, enabling a healthier, happier life.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Values</h3>
            <p className="text-gray-600">
              We believe in integrity, trust, and compassion. Our values guide everything we do as we provide practical, natural solutions to everyday health challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12 px-4 md:px-16">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/images/team-member1.jpg"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-blue-800">Dr. John Smith</h3>
            <p className="mt-2 text-gray-600">Chief Medical Officer</p>
            <p className="mt-4 text-gray-500">
              Dr. Smith is a highly experienced medical expert passionate about promoting natural health remedies.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/images/team-member2.jpg"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-blue-800">Sarah Lee</h3>
            <p className="mt-2 text-gray-600">Lead Nutritionist</p>
            <p className="mt-4 text-gray-500">
              Sarah is a leading nutritionist focused on the impact of diet on overall health and natural wellness.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/images/team-member3.jpg"
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-blue-800">Michael Chen</h3>
            <p className="mt-2 text-gray-600">Home Remedy Expert</p>
            <p className="mt-4 text-gray-500">
              Michael has years of experience researching natural home remedies and traditional healing methods.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          What Our Users Say
        </h2>
        <div className="mt-12 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">
              "E-Medical & Home Remedy has been a game-changer for me! I love their natural remedies, and their health tips have truly improved my well-being."
            </p>
            <h4 className="mt-4 text-blue-800 font-semibold">- Jessica Brown</h4>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">
              "As a healthcare professional, I highly recommend their advice. It's well-researched, reliable, and easy to apply in daily life."
            </p>
            <h4 className="mt-4 text-blue-800 font-semibold">- Dr. Emily Green</h4>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">
              "Their home remedies are amazing! I was able to find relief using natural ingredients that were readily available in my home."
            </p>
            <h4 className="mt-4 text-blue-800 font-semibold">- Mark Johnson</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
