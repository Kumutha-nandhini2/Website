import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "@/components/logo";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Logo width={160} height={50} className="w-[160px] h-[50px]" />
            </Link>
            <p className="mb-6 text-white text-opacity-80">
              Empowering organizations with AI-driven privacy automation solutions to protect data and maintain compliance.
            </p>
            <div className="mb-6 flex flex-col space-y-3">
              <div className="flex items-center">
                <Mail className="text-white mr-2" size={18} />
                <a href="mailto:mittal21jiya@gmail.com" className="text-white text-opacity-80 hover:text-opacity-100">
                  mittal21jiya@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="text-white mr-2" size={18} />
                <a href="tel:+919087695972" className="text-white text-opacity-80 hover:text-opacity-100">
                  +91-9087695972
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Privacy Management</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">AI Privacy Framework</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Data Encryption</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Compliance Automation</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Privacy Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Blog</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Whitepapers</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Webinars</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">About Us</Link></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Leadership</a></li>
              <li><Link href="/careers" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white border-opacity-20 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white text-opacity-80">© 2025 PrivacyWeave. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Terms of Service</a>
            <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
