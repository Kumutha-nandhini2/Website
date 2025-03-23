import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Bot,
  ClipboardCheck,
  BarChart,
  Users,
  Database,
  FileSearch,
  AlertTriangle,
  FileSpreadsheet,
  Bell,
  ShieldAlert
} from "lucide-react";

const features = [
  {
    icon: <Shield className="text-blue text-xl" />,
    title: "Privacy Automation",
    description: "Streamline compliance workflows with AI-powered automation to reduce manual tasks and minimize human error.",
    link: "#",
    color: "blue",
    delay: 0
  },
  {
    icon: <Database className="text-dark-blue text-xl" />,
    title: "Data Classification",
    description: "Automatically identify and categorize sensitive data across your organization to ensure appropriate protection levels.",
    link: "#",
    color: "dark-blue",
    delay: 0.1
  },
  {
    icon: <FileSearch className="text-blue text-xl" />,
    title: "Data Mapping",
    description: "Create comprehensive data flow diagrams to understand where your sensitive data resides and how it moves through your systems.",
    link: "#",
    color: "blue",
    delay: 0.2
  },
  {
    icon: <ClipboardCheck className="text-dark-blue text-xl" />,
    title: "Consent Management",
    description: "Maintain compliance with DPDP Act 2023 and other privacy regulations with robust consent tracking and management.",
    link: "#",
    color: "dark-blue",
    delay: 0.3
  },
  {
    icon: <AlertTriangle className="text-blue text-xl" />,
    title: "Anomaly Detection",
    description: "Use AI-powered algorithms to identify unusual data access patterns and potential privacy risks in real-time.",
    link: "#",
    color: "blue",
    delay: 0.4
  },
  {
    icon: <ShieldAlert className="text-dark-blue text-xl" />,
    title: "Breach Detection",
    description: "Quickly identify and respond to potential data breaches with advanced monitoring and alert systems.",
    link: "#",
    color: "dark-blue",
    delay: 0.5
  },
  {
    icon: <Users className="text-blue text-xl" />,
    title: "AI Vendor Risk Management",
    description: "Assess and monitor third-party vendors to ensure they meet your privacy and security requirements with AI assistance.",
    link: "#",
    color: "blue",
    delay: 0.6
  },
  {
    icon: <FileSpreadsheet className="text-dark-blue text-xl" />,
    title: "Management & Reporting",
    description: "Generate comprehensive reports for regulatory compliance and internal stakeholders with automated tools.",
    link: "#",
    color: "dark-blue",
    delay: 0.7
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: feature.delay }}
    >
      <div className={`w-12 h-12 rounded-lg bg-${feature.color} bg-opacity-10 flex items-center justify-center mb-4`}>
        {feature.icon}
      </div>
      <h3 className="text-lg font-bold text-deep-blue mb-2">{feature.title}</h3>
      <p className="text-sm text-dark-gray mb-4">
        {feature.description}
      </p>
      <a 
        href={feature.link} 
        className="text-blue text-sm font-medium hover:text-dark-blue transition-colors flex items-center"
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-[#F6F4F0]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-4">Privacy Solutions Platform</h2>
          <p className="text-base text-dark-gray max-w-2xl mx-auto">
            PrivacyWeave's comprehensive platform helps organizations automate privacy compliance and enhance data security with AI-driven tools.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
