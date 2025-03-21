import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { JobListing } from "@shared/schema";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const CareersPage = () => {
  const { data: jobs, isLoading } = useQuery<JobListing[]>({
    queryKey: ["/api/job-listings"],
  });

  return (
    <>
      <div className="py-16 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Careers at PrivacyWeave</h1>
          <p className="text-lg max-w-2xl">
            Join our team of passionate professionals dedicated to transforming data privacy through AI and automation.
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary-dark mb-6">Open Positions</h2>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              We're looking for talented individuals who are passionate about data privacy and technology.
              Explore our current openings below.
            </p>
          </motion.div>
          
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : jobs && jobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="bg-neutral-light rounded-lg p-8 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm">{job.type}</span>
                    <span className="px-3 py-1 rounded-full bg-secondary bg-opacity-10 text-secondary text-sm">{job.location}</span>
                    <span className="px-3 py-1 rounded-full bg-neutral-200 text-neutral-dark text-sm">{job.experience}</span>
                  </div>
                  <p className="mb-4 text-neutral-dark">{job.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Requirements:</h4>
                    <p className="text-neutral-dark">{job.requirements}</p>
                  </div>
                  <Link href={`/careers/apply/${job.id}`}>
                    <Button>Apply Now</Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-neutral-dark">No open positions at the moment. Please check back later.</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Why Work With Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cutting-Edge Technology</h3>
                    <p className="text-neutral-dark">Work with the latest AI and machine learning technologies to solve real-world privacy challenges.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
                    <p className="text-neutral-dark">Continuous learning and development paths to advance your career and skills.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Meaningful Impact</h3>
                    <p className="text-neutral-dark">Make a difference by protecting sensitive data and helping organizations maintain privacy compliance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Great Benefits</h3>
                    <p className="text-neutral-dark">Competitive salary, flexible work options, health benefits, and more.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
