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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [applications, setApplications] = React.useState({
    active: [
      {
        id: 1,
        applicant: "John Smith",
        type: "Equipment Finance",
        amount: "R250,000",
        status: "Pending",
        submitted: "2024-03-15",
      },
      {
        id: 2,
        applicant: "Sarah Johnson",
        type: "Equipment Hire",
        amount: "R50,000",
        status: "Documents Required",
        submitted: "2024-03-14",
      },
      {
        id: 3,
        applicant: "Michael Brown",
        type: "Equipment Finance",
        amount: "R175,000",
        status: "Under Review",
        submitted: "2024-03-13",
      },
    ],
    completed: [
      {
        id: 4,
        applicant: "David Wilson",
        type: "Equipment Finance",
        amount: "R320,000",
        status: "Approved",
        submitted: "2024-03-10",
        completedDate: "2024-03-12",
      },
      {
        id: 5,
        applicant: "Emma Davis",
        type: "Equipment Hire",
        amount: "R80,000",
        status: "Rejected",
        submitted: "2024-03-09",
        completedDate: "2024-03-11",
        reason: "Insufficient documentation",
      },
      {
        id: 6,
        applicant: "James Taylor",
        type: "Equipment Finance",
        amount: "R450,000",
        status: "Approved",
        submitted: "2024-03-08",
        completedDate: "2024-03-10",
      },
    ],
  });

  const [selectedApplication, setSelectedApplication] = React.useState(null);
  const [viewDetailsOpen, setViewDetailsOpen] = React.useState(false);
  const [actionDialogOpen, setActionDialogOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState(null);
  const [actionReason, setActionReason] = React.useState("");

  React.useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
    setViewDetailsOpen(true);
  };

  const handleAction = (application, action) => {
    setSelectedApplication(application);
    setActionType(action);
    setActionDialogOpen(true);
  };

  const confirmAction = () => {
    const newApplications = { ...applications };
    const applicationIndex = newApplications.active.findIndex(
      app => app.id === selectedApplication.id
    );

    if (applicationIndex !== -1) {
      const updatedApplication = {
        ...selectedApplication,
        status: actionType === 'approve' ? 'Approved' : 'Rejected',
        completedDate: new Date().toISOString().split('T')[0],
        reason: actionType === 'reject' ? actionReason : undefined,
      };

      // Remove from active and add to completed
      newApplications.active.splice(applicationIndex, 1);
      newApplications.completed.unshift(updatedApplication);

      setApplications(newApplications);
      setActionDialogOpen(false);
      setActionReason("");
      
      toast({
        title: `Application ${actionType === 'approve' ? 'Approved' : 'Rejected'}`,
        description: `The application has been successfully ${actionType === 'approve' ? 'approved' : 'rejected'}.`,
      });
    }
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-gray-50">
        <div className="container-custom py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
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
                        <TableHead>Applicant</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.active.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell>{app.applicant}</TableCell>
                          <TableCell>{app.type}</TableCell>
                          <TableCell>{app.amount}</TableCell>
                          <TableCell>{getStatusBadge(app.status)}</TableCell>
                          <TableCell>{app.submitted}</TableCell>
                          <TableCell className="space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleViewDetails(app)}
                            >
                              View Details
                            </Button>
                            <Button 
                              variant="default" 
                              size="sm"
                              onClick={() => handleAction(app, 'approve')}
                            >
                              Approve
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleAction(app, 'reject')}
                            >
                              Reject
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
                        <TableHead>Applicant</TableHead>
                        <TableHead>Type</TableHead>
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
                          <TableCell>{app.applicant}</TableCell>
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
                  <p className="font-semibold">Applicant</p>
                  <p>{selectedApplication.applicant}</p>
                </div>
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
              {selectedApplication.reason && (
                <div>
                  <p className="font-semibold">Reason</p>
                  <p>{selectedApplication.reason}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Approve/Reject Dialog */}
      <Dialog open={actionDialogOpen} onOpenChange={setActionDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionType === 'approve' ? 'Approve Application' : 'Reject Application'}
            </DialogTitle>
            <DialogDescription>
              {actionType === 'approve'
                ? 'Are you sure you want to approve this application?'
                : 'Please provide a reason for rejecting this application.'}
            </DialogDescription>
          </DialogHeader>
          {actionType === 'reject' && (
            <Textarea
              placeholder="Enter rejection reason..."
              value={actionReason}
              onChange={(e) => setActionReason(e.target.value)}
            />
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setActionDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant={actionType === 'approve' ? 'default' : 'destructive'}
              onClick={confirmAction}
              disabled={actionType === 'reject' && !actionReason.trim()}
            >
              {actionType === 'approve' ? 'Approve' : 'Reject'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Dashboard;