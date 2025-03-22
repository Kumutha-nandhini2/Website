import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { JobListing } from "@shared/schema";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2, MapPin, Clock, Briefcase, ArrowRight, Star, Zap, Users, Heart } from "lucide-react";

const CareersPage = () => {
  const { data: jobs, isLoading } = useQuery<JobListing[]>({
    queryKey: ["/api/job-listings"],
  });

  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-dark to-primary text-white py-24 md:py-32">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 right-[10%] w-64 h-64 rounded-full bg-white/5 blur-2xl"></div>
          <div className="absolute -bottom-40 left-[5%] w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full border border-white/10"></div>
          <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full border border-white/10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 gap-2">
              <div className="size-5 bg-white text-primary rounded-full flex items-center justify-center">
                <Star className="size-3" />
              </div>
              <span>Join our team</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Careers at PrivacyWeave
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl font-light leading-relaxed mb-10">
              Join our team of passionate professionals dedicated to transforming data privacy through AI and automation. Create meaningful impact in the world of data security.
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-md font-medium"
              onClick={() => {
                const element = document.getElementById('open-positions');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Open positions section */}
      <section id="open-positions" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent mb-6">Open Positions</h2>
            <p className="text-lg text-neutral-dark/80 max-w-3xl mx-auto font-light">
              We're looking for talented individuals who are passionate about data privacy and technology.
              Explore our current openings below.
            </p>
          </motion.div>
          
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : jobs && jobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-all">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{job.type}</span>
                        </div>
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/5 text-secondary text-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{job.location}</span>
                        </div>
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      <p className="mb-4 text-neutral-dark/80 line-clamp-2">{job.description}</p>
                    </div>
                    
                    <div className="md:flex-shrink-0">
                      <Link href={`/careers/apply/${job.id}`}>
                        <Button className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 rounded-md font-medium px-8 w-full md:w-auto">
                          <span>Apply Now</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-start gap-2">
                      <h4 className="font-semibold text-primary-dark">Requirements:</h4>
                      <p className="text-neutral-dark/80 font-light">{job.requirements}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-100 max-w-2xl mx-auto">
              <div className="bg-gray-100 size-20 rounded-full flex items-center justify-center text-gray-500 mx-auto mb-6">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">No Open Positions</h3>
              <p className="text-neutral-dark/80">We don't have any open positions at the moment. Please check back later.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Why work with us section */}
      <section className="py-24 bg-gradient-to-b from-white to-neutral-light/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-10 left-[5%] w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl opacity-30 -z-10 rounded-full transform translate-x-10"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating elements */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 z-20">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary-dark flex items-center justify-center text-white text-xs">JD</div>
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">KM</div>
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-xs">TS</div>
                    </div>
                    <span className="text-sm font-medium">Team collaboration</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent mb-8">Why Work With Us?</h2>
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-primary transition-all">Cutting-Edge Technology</h3>
                      <p className="text-neutral-dark/80 font-light">Work with the latest AI and machine learning technologies to solve real-world privacy challenges.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-primary transition-all">Growth Opportunities</h3>
                      <p className="text-neutral-dark/80 font-light">Continuous learning and development paths to advance your career and skills.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-primary transition-all">Meaningful Impact</h3>
                      <p className="text-neutral-dark/80 font-light">Make a difference by protecting sensitive data and helping organizations maintain privacy compliance.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-primary transition-all">Great Benefits</h3>
                      <p className="text-neutral-dark/80 font-light">Competitive salary, flexible work options, health benefits, and more.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 px-8 rounded-md font-medium"
                  onClick={() => {
                    const element = document.getElementById('open-positions');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Open Positions
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
