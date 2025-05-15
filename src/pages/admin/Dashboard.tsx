import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FileText, Download, History, ChevronRight } from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedApplication, setSelectedApplication] = React.useState(null);
  const [feedback, setFeedback] = React.useState('');

  React.useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  const applications = [
    {
      id: 1,
      applicant: "John Smith",
      type: "Equipment Finance",
      amount: "R250,000",
      status: "Pending",
      submitted: "2024-03-15",
      company: "Mining Corp",
      history: [
        { date: "2024-03-15 09:00", action: "Application Submitted", user: "John Smith" },
        { date: "2024-03-15 10:30", action: "Documents Uploaded", user: "John Smith" },
        { date: "2024-03-15 14:15", action: "Initial Review Started", user: "Admin" }
      ],
      documents: [
        { name: "Financial Statements", type: "pdf", size: "2.4 MB", uploaded: "2024-03-15", status: "verified" },
        { name: "Company Profile", type: "pdf", size: "1.1 MB", uploaded: "2024-03-15", status: "pending" },
        { name: "Tax Clearance", type: "pdf", size: "500 KB", uploaded: "2024-03-14", status: "verified" }
      ],
    },
    {
      id: 2,
      applicant: "Sarah Johnson",
      type: "Equipment Hire",
      amount: "R50,000",
      status: "Documents Required",
      submitted: "2024-03-14",
      company: "Gold Miners Ltd",
      history: [
        { date: "2024-03-14 11:20", action: "Application Submitted", user: "Sarah Johnson" },
        { date: "2024-03-14 13:45", action: "Documents Requested", user: "Admin" },
        { date: "2024-03-14 15:30", action: "Additional Information Requested", user: "Admin" }
      ],
      documents: [
        { name: "Company Registration", type: "pdf", size: "1.2 MB", uploaded: "2024-03-14", status: "pending" },
        { name: "Insurance Certificate", type: "pdf", size: "800 KB", uploaded: "2024-03-14", status: "rejected" }
      ],
    },
    {
      id: 3,
      applicant: "Michael Brown",
      type: "Equipment Finance",
      amount: "R175,000",
      status: "Under Review",
      submitted: "2024-03-13",
      company: "Diamond Diggers",
      history: [
        { date: "2024-03-13 08:45", action: "Application Submitted", user: "Michael Brown" },
        { date: "2024-03-13 09:30", action: "Documents Uploaded", user: "Michael Brown" },
        { date: "2024-03-13 14:00", action: "Review Started", user: "Admin" },
        { date: "2024-03-14 10:15", action: "Credit Check Completed", user: "System" }
      ],
      documents: [
        { name: "Business Plan", type: "pdf", size: "3.1 MB", uploaded: "2024-03-13", status: "verified" },
        { name: "Financial Projections", type: "xlsx", size: "1.5 MB", uploaded: "2024-03-13", status: "pending" },
        { name: "Bank Statements", type: "pdf", size: "4.2 MB", uploaded: "2024-03-13", status: "verified" }
      ],
    },
    {
      id: 4,
      applicant: "David Wilson",
      type: "Equipment Finance",
      amount: "R450,000",
      status: "Approved",
      submitted: "2024-03-12",
      company: "Platinum Mining Solutions",
      history: [
        { date: "2024-03-12 10:00", action: "Application Submitted", user: "David Wilson" },
        { date: "2024-03-12 11:30", action: "Documents Uploaded", user: "David Wilson" },
        { date: "2024-03-13 09:00", action: "Review Started", user: "Admin" },
        { date: "2024-03-14 14:30", action: "Credit Check Completed", user: "System" },
        { date: "2024-03-15 10:00", action: "Application Approved", user: "Admin" }
      ],
      documents: [
        { name: "Financial Statements", type: "pdf", size: "5.2 MB", uploaded: "2024-03-12", status: "verified" },
        { name: "Business Plan", type: "pdf", size: "2.8 MB", uploaded: "2024-03-12", status: "verified" },
        { name: "Tax Clearance", type: "pdf", size: "1.1 MB", uploaded: "2024-03-12", status: "verified" }
      ],
    },
    {
      id: 5,
      applicant: "Emma Thompson",
      type: "Equipment Hire",
      amount: "R75,000",
      status: "Rejected",
      submitted: "2024-03-11",
      company: "Thompson Mining",
      history: [
        { date: "2024-03-11 13:20", action: "Application Submitted", user: "Emma Thompson" },
        { date: "2024-03-11 15:45", action: "Documents Uploaded", user: "Emma Thompson" },
        { date: "2024-03-12 09:30", action: "Review Started", user: "Admin" },
        { date: "2024-03-13 11:00", action: "Credit Check Failed", user: "System" },
        { date: "2024-03-13 14:15", action: "Application Rejected", user: "Admin" }
      ],
      documents: [
        { name: "Company Documents", type: "pdf", size: "1.8 MB", uploaded: "2024-03-11", status: "rejected" },
        { name: "Financial Records", type: "pdf", size: "2.3 MB", uploaded: "2024-03-11", status: "rejected" }
      ],
    },
    {
      id: 6,
      applicant: "James Anderson",
      type: "Equipment Finance",
      amount: "R320,000",
      status: "Approved",
      submitted: "2024-03-10",
      company: "Anderson Mining Co",
      history: [
        { date: "2024-03-10 09:15", action: "Application Submitted", user: "James Anderson" },
        { date: "2024-03-10 10:45", action: "Documents Uploaded", user: "James Anderson" },
        { date: "2024-03-11 08:30", action: "Review Started", user: "Admin" },
        { date: "2024-03-12 13:20", action: "Credit Check Passed", user: "System" },
        { date: "2024-03-13 09:45", action: "Application Approved", user: "Admin" }
      ],
      documents: [
        { name: "Business Registration", type: "pdf", size: "1.5 MB", uploaded: "2024-03-10", status: "verified" },
        { name: "Financial Statements", type: "pdf", size: "3.2 MB", uploaded: "2024-03-10", status: "verified" },
        { name: "Mining Permits", type: "pdf", size: "2.1 MB", uploaded: "2024-03-10", status: "verified" }
      ],
    }
  ];

  const handleExportToExcel = () => {
    const headers = ['ID', 'Applicant', 'Company', 'Type', 'Amount', 'Status', 'Submitted'];
    const csvData = applications.map(app => [
      app.id,
      app.applicant,
      app.company,
      app.type,
      app.amount,
      app.status,
      app.submitted
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'applications.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export Successful",
      description: "Applications data has been exported to Excel format",
    });
  };

  const handleStatusChange = (applicationId, newStatus, message = '') => {
    toast({
      title: "Application Updated",
      description: `Application status changed to ${newStatus}`,
    });
    
    if (message) {
      toast({
        title: "Feedback Sent",
        description: "Your feedback has been sent to the applicant",
      });
    }
    
    setSelectedApplication(null);
    setFeedback('');
  };

  const getStatusBadge = (status) => {
    const styles = {
      "Pending": "bg-yellow-100 text-yellow-800",
      "Documents Required": "bg-blue-100 text-blue-800",
      "Under Review": "bg-purple-100 text-purple-800",
      "Approved": "bg-green-100 text-green-800",
      "Rejected": "bg-red-100 text-red-800",
    };

    return (
      <Badge className={styles[status] || "bg-gray-100 text-gray-800"}>
        {status}
      </Badge>
    );
  };

  const getDocumentStatusBadge = (status) => {
    const styles = {
      "verified": "bg-green-100 text-green-800",
      "pending": "bg-yellow-100 text-yellow-800",
      "rejected": "bg-red-100 text-red-800",
    };

    return (
      <Badge className={styles[status] || "bg-gray-100 text-gray-800"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const handleViewDocument = (document) => {
    toast({
      title: "Opening Document",
      description: `Opening ${document.name}`,
    });
  };

  const getStatusCounts = () => {
    return {
      total: applications.length,
      pending: applications.filter(app => app.status === "Pending").length,
      documentsRequired: applications.filter(app => app.status === "Documents Required").length,
      approved: applications.filter(app => app.status === "Approved").length,
      rejected: applications.filter(app => app.status === "Rejected").length,
      underReview: applications.filter(app => app.status === "Under Review").length,
    };
  };

  const stats = getStatusCounts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-gray-50">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Pending Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.pending + stats.underReview}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Documents Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.documentsRequired}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Approved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.approved}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h1 className="text-2xl font-bold text-primary">Applications</h1>
              <Button onClick={handleExportToExcel} className="w-full md:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Export to Excel
              </Button>
            </div>

            <div className="md:hidden space-y-4">
              {applications.map((app) => (
                <Card key={app.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">{app.applicant}</h3>
                        <p className="text-sm text-muted-foreground">{app.company}</p>
                      </div>
                      {getStatusBadge(app.status)}
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span>{app.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Amount:</span>
                        <span>{app.amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Submitted:</span>
                        <span>{app.submitted}</span>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full mt-4">
                          View Details
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>Application Details</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <Tabs defaultValue="details">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="details">Details</TabsTrigger>
                              <TabsTrigger value="documents">Documents</TabsTrigger>
                              <TabsTrigger value="history">History</TabsTrigger>
                            </TabsList>

                            <TabsContent value="details" className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h3 className="font-semibold">Applicant</h3>
                                  <p>{app.applicant}</p>
                                </div>
                                <div>
                                  <h3 className="font-semibold">Company</h3>
                                  <p>{app.company}</p>
                                </div>
                                <div>
                                  <h3 className="font-semibold">Type</h3>
                                  <p>{app.type}</p>
                                </div>
                                <div>
                                  <h3 className="font-semibold">Amount</h3>
                                  <p>{app.amount}</p>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <h3 className="font-semibold">Feedback</h3>
                                <Textarea
                                  placeholder="Enter feedback or request additional information..."
                                  value={feedback}
                                  onChange={(e) => setFeedback(e.target.value)}
                                />
                              </div>

                              <div className="flex gap-2 justify-end">
                                <Button
                                  variant="outline"
                                  onClick={() => handleStatusChange(app.id, 'Documents Required', feedback)}
                                >
                                  Request Documents
                                </Button>
                                <Button
                                  variant="destructive"
                                  onClick={() => handleStatusChange(app.id, 'Rejected', feedback)}
                                >
                                  Reject
                                </Button>
                                <Button
                                  onClick={() => handleStatusChange(app.id, 'Approved', feedback)}
                                >
                                  Approve
                                </Button>
                              </div>
                            </TabsContent>

                            <TabsContent value="documents">
                              <div className="bg-gray-50 rounded-lg p-4">
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Document</TableHead>
                                      <TableHead>Type</TableHead>
                                      <TableHead>Size</TableHead>
                                      <TableHead>Uploaded</TableHead>
                                      <TableHead>Status</TableHead>
                                      <TableHead>Actions</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    {app.documents.map((doc, index) => (
                                      <TableRow key={index}>
                                        <TableCell className="flex items-center gap-2">
                                          <FileText className="w-4 h-4" />
                                          {doc.name}
                                        </TableCell>
                                        <TableCell className="uppercase">{doc.type}</TableCell>
                                        <TableCell>{doc.size}</TableCell>
                                        <TableCell>{doc.uploaded}</TableCell>
                                        <TableCell>{getDocumentStatusBadge(doc.status)}</TableCell>
                                        <TableCell>
                                          <Button 
                                            variant="outline" 
                                            size="sm"
                                            onClick={() => handleViewDocument(doc)}
                                          >
                                            View
                                          </Button>
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </div>
                            </TabsContent>

                            <TabsContent value="history">
                              <div className="space-y-4">
                                {app.history.map((event, index) => (
                                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <History className="w-5 h-5 mt-1 text-gray-500" />
                                    <div>
                                      <p className="font-medium">{event.action}</p>
                                      <p className="text-sm text-gray-500">
                                        By {event.user} on {event.date}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </TabsContent>
                          </Tabs>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="hidden md:block overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>{app.applicant}</TableCell>
                      <TableCell>{app.company}</TableCell>
                      <TableCell>{app.type}</TableCell>
                      <TableCell>{app.amount}</TableCell>
                      <TableCell>{getStatusBadge(app.status)}</TableCell>
                      <TableCell>{app.submitted}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle>Application Details</DialogTitle>
                            </DialogHeader>
                            <div className="mt-4">
                              <Tabs defaultValue="details">
                                <TabsList className="grid w-full grid-cols-3">
                                  <TabsTrigger value="details">Details</TabsTrigger>
                                  <TabsTrigger value="documents">Documents</TabsTrigger>
                                  <TabsTrigger value="history">History</TabsTrigger>
                                </TabsList>

                                <TabsContent value="details" className="space-y-6">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h3 className="font-semibold">Applicant</h3>
                                      <p>{app.applicant}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-semibold">Company</h3>
                                      <p>{app.company}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-semibold">Type</h3>
                                      <p>{app.type}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-semibold">Amount</h3>
                                      <p>{app.amount}</p>
                                    </div>
                                  </div>

                                  <div className="space-y-2">
                                    <h3 className="font-semibold">Feedback</h3>
                                    <Textarea
                                      placeholder="Enter feedback or request additional information..."
                                      value={feedback}
                                      onChange={(e) => setFeedback(e.target.value)}
                                    />
                                  </div>

                                  <div className="flex gap-2 justify-end">
                                    <Button
                                      variant="outline"
                                      onClick={() => handleStatusChange(app.id, 'Documents Required', feedback)}
                                    >
                                      Request Documents
                                    </Button>
                                    <Button
                                      variant="destructive"
                                      onClick={() => handleStatusChange(app.id, 'Rejected', feedback)}
                                    >
                                      Reject
                                    </Button>
                                    <Button
                                      onClick={() => handleStatusChange(app.id, 'Approved', feedback)}
                                    >
                                      Approve
                                    </Button>
                                  </div>
                                </TabsContent>

                                <TabsContent value="documents">
                                  <div className="bg-gray-50 rounded-lg p-4">
                                    <Table>
                                      <TableHeader>
                                        <TableRow>
                                          <TableHead>Document</TableHead>
                                          <TableHead>Type</TableHead>
                                          <TableHead>Size</TableHead>
                                          <TableHead>Uploaded</TableHead>
                                          <TableHead>Status</TableHead>
                                          <TableHead>Actions</TableHead>
                                        </TableRow>
                                      </TableHeader>
                                      <TableBody>
                                        {app.documents.map((doc, index) => (
                                          <TableRow key={index}>
                                            <TableCell className="flex items-center gap-2">
                                              <FileText className="w-4 h-4" />
                                              {doc.name}
                                            </TableCell>
                                            <TableCell className="uppercase">{doc.type}</TableCell>
                                            <TableCell>{doc.size}</TableCell>
                                            <TableCell>{doc.uploaded}</TableCell>
                                            <TableCell>{getDocumentStatusBadge(doc.status)}</TableCell>
                                            <TableCell>
                                              <Button 
                                                variant="outline" 
                                                size="sm"
                                                onClick={() => handleViewDocument(doc)}
                                              >
                                                View
                                              </Button>
                                            </TableCell>
                                          </TableRow>
                                        ))}
                                      </TableBody>
                                    </Table>
                                  </div>
                                </TabsContent>

                                <TabsContent value="history">
                                  <div className="space-y-4">
                                    {app.history.map((event, index) => (
                                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                        <History className="w-5 h-5 mt-1 text-gray-500" />
                                        <div>
                                          <p className="font-medium">{event.action}</p>
                                          <p className="text-sm text-gray-500">
                                            By {event.user} on {event.date}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </TabsContent>
                              </Tabs>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;