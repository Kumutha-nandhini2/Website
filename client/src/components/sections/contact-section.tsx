import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail } from "lucide-react";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { insertInquirySchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Extend the inquiry schema with validation rules
const contactFormSchema = insertInquirySchema.extend({
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      industry: "",
      message: "",
      consent: false
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Remove consent field as it's not part of the backend schema
      const { consent, ...inquiryData } = data;
      
      await apiRequest("POST", "/api/inquiries", inquiryData);
      
      toast({
        title: "Request submitted",
        description: "We'll be in touch with you shortly!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-primary opacity-5 rounded-tr-[200px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Ready to transform your privacy approach?</h2>
            <p className="text-lg text-neutral-dark mb-8">
              Get in touch with our experts to discuss how PrivacyWeave can help your organization automate privacy compliance and strengthen data protection.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-primary-dark mb-1">Visit Us</h4>
                  <p className="text-neutral-dark">100 Tech Park, Coimbatore, Tamil Nadu 641028, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-primary-dark mb-1">Call Us</h4>
                  <p className="text-neutral-dark">+91 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-primary-dark mb-1">Email Us</h4>
                  <p className="text-neutral-dark">contact@privacyweave.com</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Request a Demo</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Email *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry *</FormLabel>
                        <FormControl>
                          <select
                            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            {...field}
                          >
                            <option value="" disabled>Select your industry</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="finance">Finance</option>
                            <option value="technology">Technology</option>
                            <option value="retail">Retail</option>
                            <option value="education">Education</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help you? *</FormLabel>
                        <FormControl>
                          <Textarea rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I consent to PrivacyWeave processing my data for the purpose of contacting me about products and services. *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
