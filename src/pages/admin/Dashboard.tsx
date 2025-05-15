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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  const activeApplications = [
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
  ];

  const completedApplications = [
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
  ];

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
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
              <Button onClick={() => navigate('/admin/applications')}>
                View All Applications
              </Button>
            </div>

            <Tabs defaultValue="active" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
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
                      {activeApplications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium">{app.applicant}</TableCell>
                          <TableCell>{app.type}</TableCell>
                          <TableCell>{app.amount}</TableCell>
                          <TableCell>{getStatusBadge(app.status)}</TableCell>
                          <TableCell>{app.submitted}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button variant="outline" size="sm" className="bg-green-50 hover:bg-green-100">
                                Approve
                              </Button>
                              <Button variant="outline" size="sm" className="bg-red-50 hover:bg-red-100">
                                Reject
                              </Button>
                            </div>
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
                        <TableHead>Completed</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {completedApplications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium">{app.applicant}</TableCell>
                          <TableCell>{app.type}</TableCell>
                          <TableCell>{app.amount}</TableCell>
                          <TableCell>{getStatusBadge(app.status)}</TableCell>
                          <TableCell>{app.completedDate}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
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

      <Footer />
    </div>
  );
};

export default Dashboard;