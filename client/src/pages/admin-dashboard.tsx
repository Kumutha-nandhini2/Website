import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Inquiry, JobApplication } from "@shared/schema";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Loader2, Download } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { format } from "date-fns";

const AdminDashboard = () => {
  const [inquiriesPage, setInquiriesPage] = useState(1);
  const [applicationsPage, setApplicationsPage] = useState(1);
  const pageSize = 10;
  const { user } = useAuth();

  const { 
    data: inquiries, 
    isLoading: inquiriesLoading 
  } = useQuery<Inquiry[]>({
    queryKey: ["/api/admin/inquiries"],
  });

  const { 
    data: applications, 
    isLoading: applicationsLoading 
  } = useQuery<JobApplication[]>({
    queryKey: ["/api/admin/job-applications"],
  });

  // Calculate pagination for inquiries
  const totalInquiryPages = inquiries ? Math.ceil(inquiries.length / pageSize) : 0;
  const paginatedInquiries = inquiries ? 
    inquiries.slice((inquiriesPage - 1) * pageSize, inquiriesPage * pageSize) : 
    [];

  // Calculate pagination for job applications
  const totalApplicationPages = applications ? Math.ceil(applications.length / pageSize) : 0;
  const paginatedApplications = applications ? 
    applications.slice((applicationsPage - 1) * pageSize, applicationsPage * pageSize) : 
    [];

  // Handle resume download
  const handleResumeDownload = async (applicationId: number) => {
    try {
      window.open(`/api/admin/job-applications/${applicationId}/resume`, '_blank');
    } catch (error) {
      console.error("Failed to download resume:", error);
    }
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p>You don't have permission to view this page.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <Tabs defaultValue="inquiries">
        <TabsList className="mb-8">
          <TabsTrigger value="inquiries">Client Inquiries</TabsTrigger>
          <TabsTrigger value="applications">Job Applications</TabsTrigger>
        </TabsList>
        
        {/* Inquiries Tab */}
        <TabsContent value="inquiries">
          <Card>
            <CardHeader>
              <CardTitle>Client Inquiries</CardTitle>
              <CardDescription>
                View and manage incoming client requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              {inquiriesLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : inquiries && inquiries.length > 0 ? (
                <>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Industry</TableHead>
                        <TableHead>Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedInquiries.map((inquiry) => (
                        <TableRow key={inquiry.id}>
                          <TableCell>
                            {format(new Date(inquiry.createdAt), 'MMM d, yyyy')}
                          </TableCell>
                          <TableCell>
                            {inquiry.firstName} {inquiry.lastName}
                          </TableCell>
                          <TableCell>{inquiry.email}</TableCell>
                          <TableCell>{inquiry.company}</TableCell>
                          <TableCell>
                            {inquiry.industry.charAt(0).toUpperCase() + inquiry.industry.slice(1)}
                          </TableCell>
                          <TableCell className="max-w-xs truncate">
                            {inquiry.message}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  {/* Pagination for inquiries */}
                  {totalInquiryPages > 1 && (
                    <Pagination className="mt-6">
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => setInquiriesPage(Math.max(1, inquiriesPage - 1))}
                            disabled={inquiriesPage === 1}
                          />
                        </PaginationItem>
                        {Array.from({ length: totalInquiryPages }).map((_, i) => (
                          <PaginationItem key={i}>
                            <PaginationLink
                              onClick={() => setInquiriesPage(i + 1)}
                              isActive={inquiriesPage === i + 1}
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => setInquiriesPage(Math.min(totalInquiryPages, inquiriesPage + 1))}
                            disabled={inquiriesPage === totalInquiryPages}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-neutral-dark">No inquiries yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Job Applications Tab */}
        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Job Applications</CardTitle>
              <CardDescription>
                Review job applications from candidates
              </CardDescription>
            </CardHeader>
            <CardContent>
              {applicationsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : applications && applications.length > 0 ? (
                <>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Experience</TableHead>
                        <TableHead>Resume</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedApplications.map((application) => (
                        <TableRow key={application.id}>
                          <TableCell>
                            {format(new Date(application.createdAt), 'MMM d, yyyy')}
                          </TableCell>
                          <TableCell>{application.fullName}</TableCell>
                          <TableCell>{application.email}</TableCell>
                          <TableCell>{application.phone}</TableCell>
                          <TableCell>{application.position}</TableCell>
                          <TableCell>{application.experience}</TableCell>
                          <TableCell>
                            {application.resumePath ? (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleResumeDownload(application.id)}
                              >
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                            ) : (
                              <span className="text-muted-foreground">No resume</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  {/* Pagination for applications */}
                  {totalApplicationPages > 1 && (
                    <Pagination className="mt-6">
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => setApplicationsPage(Math.max(1, applicationsPage - 1))}
                            disabled={applicationsPage === 1}
                          />
                        </PaginationItem>
                        {Array.from({ length: totalApplicationPages }).map((_, i) => (
                          <PaginationItem key={i}>
                            <PaginationLink
                              onClick={() => setApplicationsPage(i + 1)}
                              isActive={applicationsPage === i + 1}
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => setApplicationsPage(Math.min(totalApplicationPages, applicationsPage + 1))}
                            disabled={applicationsPage === totalApplicationPages}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-neutral-dark">No job applications yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
