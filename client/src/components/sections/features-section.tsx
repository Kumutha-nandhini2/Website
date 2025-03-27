import {
  Shield,
  Lock,
  Bot,
  ClipboardCheck,
  BarChart,
  Users,
  Database,
  FileSearch,
  FileSpreadsheet,
  ShieldAlert
} from "lucide-react";

const features = [
  {
    icon: <Shield className="text-[#578FCA] text-xl" />,
    title: "Privacy Automation",
    description: "Streamline compliance workflows with AI-powered automation to reduce manual tasks and minimize human error.",
    link: "#",
    color: "blue",
    delay: 0
  },
  {
    icon: <Database className="text-[#2A5485] text-xl" />,
    title: "Data Classification",
    description: "Automatically identify and categorize sensitive data across your organization to ensure appropriate protection levels.",
    link: "#",
    color: "dark-blue",
    delay: 0.1
  },
  {
    icon: <FileSearch className="text-[#578FCA] text-xl" />,
    title: "Data Mapping",
    description: "Create comprehensive data flow diagrams to understand where your sensitive data resides and how it moves through your systems.",
    link: "#",
    color: "blue",
    delay: 0.2
  },
  {
    icon: <ClipboardCheck className="text-[#2A5485] text-xl" />,
    title: "Consent Management",
    description: "Maintain compliance with DPDP Act 2023 and other privacy regulations with robust consent tracking and management.",
    link: "#",
    color: "dark-blue",
    delay: 0.3
  },
  {
    icon: <Shield className="text-[#578FCA] text-xl" />,
    title: "Anomaly Detection",
    description: "Use AI-powered algorithms to identify unusual data access patterns and potential privacy risks in real-time.",
    link: "#",
    color: "blue",
    delay: 0.4
  },
  {
    icon: <ShieldAlert className="text-[#2A5485] text-xl" />,
    title: "Breach Detection",
    description: "Quickly identify and respond to potential data breaches with advanced monitoring and alert systems.",
    link: "#",
    color: "dark-blue",
    delay: 0.5
  },
  {
    icon: <BarChart className="text-[#578FCA] text-xl" />,
    title: "Data and AI Governance",
    description: "Implement robust governance frameworks that ensure responsible AI use, ethical data practices, and continuous monitoring of data flows across your organization.",
    link: "#",
    color: "blue",
    delay: 0.6
  },
  {
    icon: <Users className="text-[#2A5485] text-xl" />,
    title: "Third-Party Management",
    description: "AI-powered solution for risk assessment of vendors, ensuring they adhere to privacy standards with automated monitoring and compliance verification.",
    link: "#",
    color: "dark-blue",
    delay: 0.7
  },
  {
    icon: <FileSpreadsheet className="text-[#578FCA] text-xl" />,
    title: "Breach Management & Reporting",
    description: "Comprehensive incident response system with automated reporting tools for regulatory compliance and stakeholder communication during privacy breaches.",
    link: "#",
    color: "blue",
    delay: 0.8
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-md bg-${feature.color === 'blue' ? '[#578FCA]' : '[#2A5485]'}/10 flex items-center justify-center mb-4`}>
        {feature.icon}
      </div>
      <h3 className="text-lg font-bold text-deep-blue mb-2">{feature.title}</h3>
      <p className="text-sm text-dark-gray mb-4">
        {feature.description}
      </p>
      <a 
        href={feature.link} 
        className="text-[#578FCA] text-sm font-medium hover:text-[#2A5485] transition-colors flex items-center"
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-[#FDFAF6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-4">Privacy Solutions Platform</h2>
          <p className="text-base text-dark-gray max-w-2xl mx-auto">
            PrivacyWeave's comprehensive platform helps organizations automate privacy compliance and enhance data security with AI-driven tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
