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
import { FileText } from "lucide-react";

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
      documents: [
        { 
          name: "Financial Statements", 
          type: "pdf",
          size: "2.4 MB",
          uploaded: "2024-03-15",
          status: "verified"
        },
        { 
          name: "Company Profile", 
          type: "pdf",
          size: "1.1 MB",
          uploaded: "2024-03-15",
          status: "pending"
        },
        { 
          name: "Tax Clearance", 
          type: "pdf",
          size: "500 KB",
          uploaded: "2024-03-14",
          status: "verified"
        }
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
      documents: [
        { 
          name: "Company Registration", 
          type: "pdf",
          size: "1.2 MB",
          uploaded: "2024-03-14",
          status: "pending"
        },
        { 
          name: "Insurance Certificate", 
          type: "pdf",
          size: "800 KB",
          uploaded: "2024-03-14",
          status: "rejected"
        }
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
      documents: [
        { 
          name: "Business Plan", 
          type: "pdf",
          size: "3.1 MB",
          uploaded: "2024-03-13",
          status: "verified"
        },
        { 
          name: "Financial Projections", 
          type: "xlsx",
          size: "1.5 MB",
          uploaded: "2024-03-13",
          status: "pending"
        },
        { 
          name: "Bank Statements", 
          type: "pdf",
          size: "4.2 MB",
          uploaded: "2024-03-13",
          status: "verified"
        }
      ],
    },
  ];

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
    // In a real application, this would open the document
    toast({
      title: "Opening Document",
      description: `Opening ${document.name}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-gray-50">
        <div className="container-custom py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-primary mb-6">Admin Dashboard</h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Applications</h2>
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
                          <div className="flex gap-2">
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
                                <div className="space-y-6 mt-4">
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
                                  
                                  <div>
                                    <h3 className="font-semibold mb-4">Documents</h3>
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
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;