import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

// components/Topbar.tsx (updated with responsiveness)
export default function Topbar() {
    return (
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <a href="tel:+1234567890" className="flex items-center space-x-2">
              <Phone size={18} />
              <span>03320405516</span>
            </a>
            <a href="mailto:support@ecommerce.com" className="flex items-center space-x-2">
              <Mail size={18} />
              <span>email:alishbarehman526@gmail.com</span>
            </a>
          </div>
          <div className="text-center text-sm mt-2 sm:mt-0">
            <span>Welcome to Our Online Store</span>
          </div>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="https://facebook.com" className="text-white">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" className="text-white">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" className="text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    );
  }
  