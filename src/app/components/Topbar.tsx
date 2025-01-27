import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

// components/Topbar.tsx
export default function Topbar() {
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-center sm:text-left">
          {/* <a href="tel:+1234567890" className="flex items-center space-x-2">
            <Phone size={18} />
            <span>03320405516</span>
          </a> */}
          <a href="mailto:alishbarehman526@gmail.com" className="flex items-center space-x-2 mt-1 sm:mt-0">
            <Mail size={18} />
            <span>alishbarehman526@gmail.com</span>
          </a>
        </div>

        {/* Welcome Message */}
        <div className="text-sm text-center">
          <span>Welcome to Our Online Store</span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <a href="https://linkedin.com/in/alishba-rehman-29074821a/" className="text-white">
            <Linkedin size={20} />
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
