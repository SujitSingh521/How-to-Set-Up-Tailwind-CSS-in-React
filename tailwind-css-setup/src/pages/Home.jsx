// Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white text-center py-20">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Welcome to Our Home Page
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          This is the place where great things happen. Discover more about us!
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-800 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-white">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-700">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-white">
                Feature One
              </h3>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                euismod eros velit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-700">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-white">
                Feature Two
              </h3>
              <p className="mt-4">
                Aenean at diam eu nunc tempus aliquet. Integer feugiat magna at
                felis convallis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-700">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-white">
                Feature Three
              </h3>
              <p className="mt-4">
                Morbi viverra interdum nibh at ullamcorper. Ut sit amet lacus
                aliquam, fermentum nisl.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-100 dark:bg-blue-800 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-white">
            What Our Users Say
          </h2>
          <div className="mt-8">
            <p className="italic text-gray-600 dark:text-gray-300">
              "This is the best website I’ve ever used! I can’t recommend it
              enough."
            </p>
            <p className="mt-4 text-gray-700 font-semibold dark:text-gray-200">
              - John Doe
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg">
          Sign up today and enjoy the best features available!
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-800 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-700 dark:bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
