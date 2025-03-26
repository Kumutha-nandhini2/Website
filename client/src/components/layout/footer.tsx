import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "@/components/logo";

const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] text-[#0a2c5a] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Logo width={160} height={50} className="w-[160px] h-[50px]" />
            </Link>
            <p className="mb-6 text-[#0a2c5a] text-opacity-90 font-light">
              Empowering organizations with AI-driven privacy automation solutions to protect data and maintain compliance.
            </p>
            <div className="mb-6 flex flex-col space-y-3">
              <div className="flex items-center group">
                <div className="w-8 h-8 rounded-md bg-[#0a2c5a]/10 flex items-center justify-center mr-3 transition-all group-hover:bg-[#0a2c5a]/20">
                  <Mail className="text-[#0a2c5a]" size={16} />
                </div>
                <a href="mailto:mittal21jiya@gmail.com" className="text-[#0a2c5a] text-opacity-90 hover:text-opacity-100 transition-all">
                  mittal21jiya@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 rounded-md bg-[#0a2c5a]/10 flex items-center justify-center mr-3 transition-all group-hover:bg-[#0a2c5a]/20">
                  <Phone className="text-[#0a2c5a]" size={16} />
                </div>
                <a href="tel:+919087695972" className="text-[#0a2c5a] text-opacity-90 hover:text-opacity-100 transition-all">
                  +91-9087695972
                </a>
              </div>
            </div>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/privacyweave/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-[#0a2c5a]/10 flex items-center justify-center hover:bg-[#0a2c5a]/20 transition-all text-[#0a2c5a]">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-[#0a2c5a]/10 flex items-center justify-center hover:bg-[#0a2c5a]/20 transition-all text-[#0a2c5a]">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-[#0a2c5a]/10 flex items-center justify-center hover:bg-[#0a2c5a]/20 transition-all text-[#0a2c5a]">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-[#0a2c5a]/10 flex items-center justify-center hover:bg-[#0a2c5a]/20 transition-all text-[#0a2c5a]">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Privacy Management</a></li>
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">AI Privacy Framework</a></li>
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Data Encryption</a></li>
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Compliance Automation</a></li>
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Privacy Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Whitepapers</a></li>
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Webinars</a></li>
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">About Us</Link></li>
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Leadership</a></li>
              <li><Link href="/careers" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-[#0a2c5a] text-opacity-80 hover:text-opacity-100 transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <div className="relative my-12">
          <div className="absolute left-0 right-0 h-px bg-[#0a2c5a]/20"></div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-[#0a2c5a]/70 text-sm font-light">© 2025 PrivacyWeave. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#" className="text-[#0a2c5a]/70 text-sm hover:text-[#0a2c5a] transition-all">Privacy Policy</a>
            <a href="#" className="text-[#0a2c5a]/70 text-sm hover:text-[#0a2c5a] transition-all">Terms of Service</a>
            <a href="#" className="text-[#0a2c5a]/70 text-sm hover:text-[#0a2c5a] transition-all">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
