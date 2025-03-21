import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Bot,
  ClipboardCheck,
  BarChart,
  Users
} from "lucide-react";

const features = [
  {
    icon: <Shield className="text-primary text-xl" />,
    title: "Privacy Automation",
    description: "Streamline compliance workflows with AI-powered automation to reduce manual tasks and minimize human error.",
    link: "#",
    color: "primary",
    delay: 0
  },
  {
    icon: <Lock className="text-secondary text-xl" />,
    title: "End-to-End Encryption",
    description: "Protect sensitive data with military-grade encryption standards that ensure information remains secure at rest and in transit.",
    link: "#",
    color: "secondary",
    delay: 0.2
  },
  {
    icon: <Bot className="text-primary text-xl" />,
    title: "AI-Powered Assessment",
    description: "Leverage machine learning to identify privacy risks and provide actionable recommendations for enhanced protection.",
    link: "#",
    color: "primary",
    delay: 0.4
  },
  {
    icon: <ClipboardCheck className="text-secondary text-xl" />,
    title: "Compliance Management",
    description: "Stay compliant with GDPR, HIPAA, CCPA, and other regulations with built-in frameworks and automated reporting.",
    link: "#",
    color: "secondary",
    delay: 0
  },
  {
    icon: <BarChart className="text-primary text-xl" />,
    title: "Privacy Analytics",
    description: "Gain actionable insights with comprehensive dashboards that visualize your privacy program performance.",
    link: "#",
    color: "primary",
    delay: 0.2
  },
  {
    icon: <Users className="text-secondary text-xl" />,
    title: "Vendor Risk Management",
    description: "Assess and monitor third-party vendors to ensure they meet your privacy and security requirements.",
    link: "#",
    color: "secondary",
    delay: 0.4
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-8 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: feature.delay }}
    >
      <div className={`w-14 h-14 rounded-full bg-${feature.color} bg-opacity-10 flex items-center justify-center mb-6`}>
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-primary-dark mb-4">{feature.title}</h3>
      <p className="text-neutral-dark mb-6">
        {feature.description}
      </p>
      <a 
        href={feature.link} 
        className={`text-${feature.color} font-medium hover:text-${feature.color}-dark transition-colors flex items-center`}
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Complete Data Privacy Platform</h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            PrivacyWeave's comprehensive platform helps organizations automate privacy compliance while leveraging AI to enhance data security.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
