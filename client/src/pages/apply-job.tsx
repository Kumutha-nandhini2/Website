import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { JobListing, jobApplicationWithResumeSchema } from "@shared/schema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, FileUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ApplyFormValues = z.infer<typeof jobApplicationWithResumeSchema>;

const ApplyJobPage = () => {
  const [match, params] = useRoute<{ id: string }>("/careers/apply/:id");
  const [location, navigate] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get job details
  const { data: job, isLoading } = useQuery<JobListing>({
    queryKey: [match ? `/api/job-listings/${params.id}` : null],
    enabled: !!match,
  });

  const form = useForm<ApplyFormValues>({
    resolver: zodResolver(jobApplicationWithResumeSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: job?.title || "",
      experience: "",
      message: "",
    },
  });

  // Update position when job data is fetched
  useEffect(() => {
    if (job) {
      form.setValue("position", job.title);
    }
  }, [job, form]);

  const onSubmit = async (data: ApplyFormValues) => {
    if (!match || !job) return;
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      
      // Add form fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (key !== 'resumeFile') {
          formData.append(key, value as string);
        }
      });
      
      // Add resume file if provided
      if (data.resumeFile) {
        formData.append('resumeFile', data.resumeFile);
      }
      
      // Submit application
      const response = await fetch('/api/job-applications', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you soon.",
      });
      
      // Redirect to careers page
      navigate("/careers");
    } catch (error) {
      toast({
        title: "Failed to submit application",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!match) {
    navigate("/careers");
    return null;
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Job not found</h1>
        <p>The job you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate("/careers")} className="mt-4">
          Back to Careers
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Apply for: {job.title}</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Job Details</h2>
          <div className="bg-neutral-light p-6 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm">{job.type}</span>
              <span className="px-3 py-1 rounded-full bg-secondary bg-opacity-10 text-secondary text-sm">{job.location}</span>
              <span className="px-3 py-1 rounded-full bg-neutral-200 text-neutral-dark text-sm">{job.experience}</span>
            </div>
            <p className="mb-4">{job.description}</p>
            <div>
              <h3 className="font-bold mb-2">Requirements:</h3>
              <p>{job.requirements}</p>
            </div>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Submit Your Application</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position*</FormLabel>
                      <FormControl>
                        <Input {...field} readOnly />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience*</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 3 years in data privacy" {...field} />
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
                      <FormLabel>Cover Letter / Additional Information</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us why you're interested in this position and why you'd be a good fit"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="resumeFile"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Resume (PDF or DOC)*</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4">
                          <label
                            htmlFor="resumeUpload"
                            className="flex items-center gap-2 px-4 py-2 border border-input rounded-md bg-background hover:bg-neutral-100 cursor-pointer"
                          >
                            <FileUp className="h-5 w-5" />
                            {value ? 'Change file' : 'Select file'}
                          </label>
                          <input
                            id="resumeUpload"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                onChange(file);
                              }
                            }}
                            {...fieldProps}
                          />
                          {value && (
                            <span className="text-sm text-neutral-dark">
                              {typeof value === 'object' ? value.name : value}
                            </span>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplyJobPage;
