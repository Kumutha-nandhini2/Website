import { motion } from "framer-motion";

const DataManagementSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            Responsibly collect, govern, and use data
          </h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            PrivacyWeave's platform ensures secure and compliant handling of your organization's data throughout its lifecycle.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Data Visualization SVG */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 900 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            {/* Left circle - Data sources */}
            <g>
              <circle cx="230" cy="250" r="150" fill="#F5F5F5" stroke="#E2E2E2" strokeWidth="2" />
              <text x="230" y="180" textAnchor="middle" fill="#333" fontSize="18" fontWeight="bold">
                Data
              </text>
              <text x="230" y="210" textAnchor="middle" fill="#666" fontSize="12">
                Structured | Semi-Structured | Unstructured
              </text>
              
              {/* Data source icons */}
              <circle cx="180" cy="250" r="30" fill="#F0F0F0" stroke="#D0D0D0" strokeWidth="1" />
              <text x="180" y="255" textAnchor="middle" fill="#555" fontSize="12">
                CRM
              </text>
              
              <circle cx="230" cy="300" r="30" fill="#F0F0F0" stroke="#D0D0D0" strokeWidth="1" />
              <text x="230" y="305" textAnchor="middle" fill="#555" fontSize="12">
                ERP
              </text>
              
              <circle cx="280" cy="250" r="30" fill="#F0F0F0" stroke="#D0D0D0" strokeWidth="1" />
              <text x="280" y="255" textAnchor="middle" fill="#555" fontSize="12">
                Cloud
              </text>
              
              <circle cx="230" cy="200" r="30" fill="#F0F0F0" stroke="#D0D0D0" strokeWidth="1" />
              <text x="230" y="205" textAnchor="middle" fill="#555" fontSize="12">
                IoT
              </text>
            </g>
            
            {/* Connection path between circles */}
            <path
              d="M380 250 C450 180, 520 180, 590 250"
              stroke="#7DD3FC"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M380 250 C450 320, 520 320, 590 250"
              stroke="#7DD3FC"
              strokeWidth="4"
              fill="none"
            />
            
            {/* Circle connectors */}
            <circle cx="380" cy="250" r="8" fill="#0EA5E9" />
            <circle cx="485" cy="190" r="8" fill="#0EA5E9" />
            <circle cx="590" cy="250" r="8" fill="#0EA5E9" />
            <circle cx="485" cy="310" r="8" fill="#0EA5E9" />
            
            {/* Right circle - Data governance */}
            <g>
              <ellipse cx="670" cy="250" rx="210" ry="200" fill="#F5F7F9" stroke="#D5E8D4" strokeWidth="2" />
              
              {/* AI at center */}
              <circle cx="670" cy="250" r="60" fill="#E1F5E7" stroke="#C5E1A5" strokeWidth="2" />
              <text x="670" y="258" textAnchor="middle" fill="#333" fontSize="24" fontWeight="bold">
                AI
              </text>
              
              {/* Governance menu items */}
              <g>
                <rect x="550" y="350" width="240" height="36" rx="4" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="670" y="373" textAnchor="middle" fill="#333" fontSize="14">
                  Privacy Automation
                </text>
              </g>
              
              <g>
                <rect x="550" y="300" width="240" height="36" rx="4" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="670" y="323" textAnchor="middle" fill="#333" fontSize="14">
                  Consent & Preferences
                </text>
              </g>
              
              <g>
                <rect x="550" y="250" width="240" height="36" rx="4" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="670" y="273" textAnchor="middle" fill="#333" fontSize="14">
                  Data & AI Governance
                </text>
              </g>
              
              <g>
                <rect x="550" y="200" width="240" height="36" rx="4" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="670" y="223" textAnchor="middle" fill="#333" fontSize="14">
                  Tech Risk & Compliance
                </text>
              </g>
              
              <g>
                <rect x="550" y="150" width="240" height="36" rx="4" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="670" y="173" textAnchor="middle" fill="#333" fontSize="14">
                  Third-Party Management
                </text>
              </g>
              
              {/* Governance process bubbles */}
              <g>
                <circle cx="550" cy="100" r="40" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="550" y="95" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">
                  Enforce
                </text>
                <text x="550" y="115" textAnchor="middle" fill="#666" fontSize="10">
                  policies
                </text>
              </g>
              
              <g>
                <circle cx="670" cy="70" r="40" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="670" y="65" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">
                  Mitigate
                </text>
                <text x="670" y="85" textAnchor="middle" fill="#666" fontSize="10">
                  risk
                </text>
              </g>
              
              <g>
                <circle cx="790" cy="100" r="40" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="790" y="95" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">
                  Collect
                </text>
                <text x="790" y="115" textAnchor="middle" fill="#666" fontSize="10">
                  evidence
                </text>
              </g>
              
              <g>
                <circle cx="830" cy="200" r="40" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="830" y="195" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">
                  Track
                </text>
                <text x="830" y="215" textAnchor="middle" fill="#666" fontSize="10">
                  compliance
                </text>
              </g>
              
              <g>
                <circle cx="830" cy="300" r="40" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="830" y="295" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">
                  Monitor
                </text>
                <text x="830" y="315" textAnchor="middle" fill="#666" fontSize="10">
                  compliance
                </text>
              </g>
              
              <g>
                <circle cx="790" cy="400" r="40" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="790" y="395" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">
                  Resolve
                </text>
                <text x="790" y="415" textAnchor="middle" fill="#666" fontSize="10">
                  issues
                </text>
              </g>
              
              <g>
                <circle cx="670" cy="430" r="40" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="670" y="425" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">
                  Remediate
                </text>
                <text x="670" y="445" textAnchor="middle" fill="#666" fontSize="10">
                  gaps
                </text>
              </g>
              
              <g>
                <circle cx="550" cy="400" r="40" fill="white" stroke="#D5E8D4" strokeWidth="1" />
                <text x="550" y="395" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">
                  Generate
                </text>
                <text x="550" y="415" textAnchor="middle" fill="#666" fontSize="10">
                  reports
                </text>
              </g>
            </g>
            
            {/* Process Icons */}
            <g>
              <circle cx="485" cy="140" r="25" fill="#E1F5FE" stroke="#81D4FA" strokeWidth="1" />
              <text x="485" y="145" textAnchor="middle" fill="#0277BD" fontSize="20">🔍</text>
            </g>
            
            <g>
              <circle cx="485" cy="360" r="25" fill="#E1F5FE" stroke="#81D4FA" strokeWidth="1" />
              <text x="485" y="365" textAnchor="middle" fill="#0277BD" fontSize="20">🔒</text>
            </g>
          </svg>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Transparently collect data
            </h3>
            <p className="text-neutral-dark">
              Empower your teams to collect data with clear consent management and privacy-by-design principles.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Manage risk holistically
            </h3>
            <p className="text-neutral-dark">
              Safeguard your data from risks, including unauthorized access and security threats.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Enforce policies and controls
            </h3>
            <p className="text-neutral-dark">
              Maximize the value of your data and AI by applying responsible and compliant governance rules.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataManagementSection;