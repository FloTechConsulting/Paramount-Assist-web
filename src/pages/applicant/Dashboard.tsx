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

const Dashboard = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'applicant') {
      navigate('/login');
    }
  }, [navigate]);

  const activeApplications = [
    {
      id: 1,
      type: "Equipment Finance",
      amount: "R150,000",
      status: "Documents Required",
      submitted: "2024-03-15",
      actionRequired: "Please upload last 6 months of bank statements",
    },
    {
      id: 2,
      type: "Equipment Hire",
      amount: "R25,000",
      status: "Under Review",
      submitted: "2024-03-10",
    },
  ];

  const completedApplications = [
    {
      id: 3,
      type: "Equipment Finance",
      amount: "R200,000",
      status: "Approved",
      submitted: "2024-02-15",
      completedDate: "2024-02-18",
    },
    {
      id: 4,
      type: "Equipment Hire",
      amount: "R45,000",
      status: "Rejected",
      submitted: "2024-02-10",
      completedDate: "2024-02-12",
      reason: "Insufficient credit history",
    },
  ];

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
                <p className="text-3xl font-bold">{activeApplications.length + completedApplications.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{activeApplications.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Completed Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{completedApplications.length}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 mb-8">
            {activeApplications.map((app) => app.actionRequired && (
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
                      {activeApplications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell>{app.type}</TableCell>
                          <TableCell>{app.amount}</TableCell>
                          <TableCell>{getStatusBadge(app.status)}</TableCell>
                          <TableCell>{app.submitted}</TableCell>
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
                      {completedApplications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell>{app.type}</TableCell>
                          <TableCell>{app.amount}</TableCell>
                          <TableCell>{getStatusBadge(app.status)}</TableCell>
                          <TableCell>{app.submitted}</TableCell>
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

          <div className="mt-6 flex justify-center">
            <Button onClick={() => navigate('/finance')} className="btn-primary">
              New Application
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;