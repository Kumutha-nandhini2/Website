import { motion } from "framer-motion";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { JobListing } from "@shared/schema";
import { Loader2 } from "lucide-react";

const CareerSection = () => {
  const { data: jobListings, isLoading } = useQuery<JobListing[]>({
    queryKey: ["/api/job-listings"],
  });

  return (
    <section className="py-20 bg-gradient-to-r from-primary-dark to-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-white text-opacity-90 max-w-3xl mx-auto">
            We're building a team of passionate professionals dedicated to creating cutting-edge privacy solutions. If you're excited about data privacy and AI, we want to hear from you.
          </p>
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {jobListings && jobListings.slice(0, 2).map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 text-[#3674B5]">{job.title}</h3>
                <p className="mb-6 text-white text-opacity-90">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-[#3674B5] bg-opacity-30 text-sm font-medium">{job.type}</span>
                  <span className="px-3 py-1 rounded-full bg-[#3674B5] bg-opacity-30 text-sm font-medium">{job.location}</span>
                  <span className="px-3 py-1 rounded-full bg-[#3674B5] bg-opacity-30 text-sm font-medium">{job.experience}</span>
                </div>
                <Link href={`/careers/apply/${job.id}`} className="text-[#3674B5] inline-flex items-center font-medium">
                  Apply Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/careers">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-dark">
              View All Openings
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
