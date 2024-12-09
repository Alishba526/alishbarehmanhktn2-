import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
export default function PricingSection() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Simple Pricing</h2>
        <p className="text-gray-600 mb-8">Choose a plan that fits your needs.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Free</h3>
            <p className="text-4xl font-bold text-blue-500 mb-6">$0</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Basic access to all features</li>
              <li>Limited product updates</li>
              <li>Community support</li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Try for Free
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Standard</h3>
            <p className="text-4xl font-bold mb-6">$9.99</p>
            <ul className="space-y-2 mb-6">
              <li>Unlimited access to all features</li>
              <li>Unlimited product updates</li>
              <li>Email support</li>
            </ul>
            <button className="w-full bg-green-500 py-2 rounded-lg hover:bg-green-600 transition">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium</h3>
            <p className="text-4xl font-bold text-blue-500 mb-6">$19.99</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>All Standard features</li>
              <li>Priority support</li>
              <li>Dedicated account manager</li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="max-w-7xl mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing FAQs</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt orci sit amet enim tempor, eget congue purus bibendum.
          </p>
          <p className="text-gray-700">
            Nulla facilisi. Quisque eget dui a magna convallis tristique. Cras facilisis quam a metus tincidunt viverra.
          </p>
          <p className="text-gray-700">
            Aliquam erat volutpat. Sed vel ante sed nisi ornare ultrices. Duis sit amet libero elit.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing FAQs</h2>
          <p className="text-gray-700">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p className="text-gray-700">
            Curabitur ac dui ac justo ornare feugiat id vel sapien. Sed eget nisi lorem.
          </p>
          <p className="text-gray-700">
            Donec a risus sit amet ipsum scelerisque luctus non ut tortor.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h1 className="text-4xl font-bold mb-2">START YOUR 14 DAYS</h1>
        <p className="text-lg text-gray-800 mb-4">
          Haven got your answer? Contact our support.
        </p>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition mb-4">
          Contact Support
        </button>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-700 transition text-2xl"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
}