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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bell } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Dashboard = () => {
  const navigate = useNavigate();
  const [viewDetailsOpen, setViewDetailsOpen] = React.useState(false);
  const [selectedApplication, setSelectedApplication] = React.useState(null);
  const [applications, setApplications] = React.useState({
    active: [
      {
        id: 1,
        type: "Equipment Finance",
        amount: "R150,000",
        status: "Documents Required",
        submitted: "2024-03-15",
        actionRequired: "Please upload last 6 months of bank statements",
        details: {
          equipmentType: "30-Tonne Excavator",
          term: "36 Months",
          projectLocation: "Johannesburg, Gauteng",
          additionalInfo: "Application pending document verification"
        }
      },
      {
        id: 2,
        type: "Equipment Hire",
        amount: "R25,000",
        status: "Under Review",
        submitted: "2024-03-10",
        details: {
          equipmentType: "Wheel Loader",
          hirePeriod: "3 Months",
          projectLocation: "Cape Town, Western Cape",
          additionalInfo: "Short-term project requirement"
        }
      },
    ],
    completed: [
      {
        id: 3,
        type: "Equipment Finance",
        amount: "R200,000",
        status: "Approved",
        submitted: "2024-02-15",
        completedDate: "2024-02-18",
        details: {
          equipmentType: "D6 Dozer",
          term: "48 Months",
          projectLocation: "Durban, KwaZulu-Natal",
          additionalInfo: "Approved with standard terms"
        }
      },
      {
        id: 4,
        type: "Equipment Hire",
        amount: "R45,000",
        status: "Rejected",
        submitted: "2024-02-10",
        completedDate: "2024-02-12",
        reason: "Insufficient credit history",
        details: {
          equipmentType: "Haul Truck",
          hirePeriod: "6 Months",
          projectLocation: "Kimberley, Northern Cape",
          additionalInfo: "Reapplication possible after 3 months"
        }
      },
    ]
  });

  React.useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'applicant') {
      navigate('/login');
    }
  }, [navigate]);

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
    setViewDetailsOpen(true);
  };

  const getStatusBadge = (status) => {
    const styles = {
      "Under Review": "bg-yellow-100 text-yellow-800",
      "Documents Required": "bg-blue-100 text-blue-800",
      "Approved": "bg-green-100 text-green-800",
      "Rejected": "bg-red-100 text-red-800",
    };

    return (
      <Badge className={styles[status] || "bg-gray-100 text-gray-800"}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-gray-50">
        <div className="container-custom py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-primary">My Applications</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">
                  {applications.active.length + applications.completed.length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{applications.active.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Completed Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{applications.completed.length}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 mb-8">
            {applications.active.map((app) => app.actionRequired && (
              <Alert key={`alert-${app.id}`}>
                <Bell className="h-4 w-4" />
                <AlertTitle>Action Required</AlertTitle>
                <AlertDescription>
                  {app.actionRequired}
                </AlertDescription>
              </Alert>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="active">Active Applications</TabsTrigger>
                <TabsTrigger value="completed">Completed Applications</TabsTrigger>
              </TabsList>

              <TabsContent value="active">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Application Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.active.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell>{app.type}</TableCell>
                          <TableCell>{app.amount}</TableCell>
                          <TableCell>{getStatusBadge(app.status)}</TableCell>
                          <TableCell>{app.submitted}</TableCell>
                          <TableCell>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleViewDetails(app)}
                            >
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="completed">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Application Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Completed</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.completed.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell>{app.type}</TableCell>
                          <TableCell>{app.amount}</TableCell>
                          <TableCell>{getStatusBadge(app.status)}</TableCell>
                          <TableCell>{app.submitted}</TableCell>
                          <TableCell>{app.completedDate}</TableCell>
                          <TableCell>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleViewDetails(app)}
                            >
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-6 flex justify-center">
            <Button onClick={() => navigate('/finance')} className="btn-primary">
              New Application
            </Button>
          </div>
        </div>
      </div>

      {/* View Details Dialog */}
      <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
          </DialogHeader>
          {selectedApplication && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Type</p>
                  <p>{selectedApplication.type}</p>
                </div>
                <div>
                  <p className="font-semibold">Amount</p>
                  <p>{selectedApplication.amount}</p>
                </div>
                <div>
                  <p className="font-semibold">Status</p>
                  <p>{selectedApplication.status}</p>
                </div>
                <div>
                  <p className="font-semibold">Submitted</p>
                  <p>{selectedApplication.submitted}</p>
                </div>
                {selectedApplication.completedDate && (
                  <div>
                    <p className="font-semibold">Completed</p>
                    <p>{selectedApplication.completedDate}</p>
                  </div>
                )}
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Additional Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Equipment Type</p>
                    <p>{selectedApplication.details.equipmentType}</p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      {selectedApplication.type === "Equipment Finance" ? "Term" : "Hire Period"}
                    </p>
                    <p>
                      {selectedApplication.type === "Equipment Finance" 
                        ? selectedApplication.details.term 
                        : selectedApplication.details.hirePeriod}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Project Location</p>
                    <p>{selectedApplication.details.projectLocation}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Additional Information</p>
                  <p>{selectedApplication.details.additionalInfo}</p>
                </div>
              </div>

              {selectedApplication.reason && (
                <div className="border-t pt-4">
                  <p className="font-semibold">Reason for Rejection</p>
                  <p>{selectedApplication.reason}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Dashboard;