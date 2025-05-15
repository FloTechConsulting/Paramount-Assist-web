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
import { Bell, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Dashboard = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'applicant') {
      navigate('/login');
    }
  }, [navigate]);

  const applications = [
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="Mining Corp" />
                  </div>
                  <div>
                    <Label htmlFor="regNumber">Registration Number</Label>
                    <Input id="regNumber" defaultValue="2020/123456/07" />
                  </div>
                  <div>
                    <Label htmlFor="contactPerson">Contact Person</Label>
                    <Input id="contactPerson" defaultValue="John Smith" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@miningcorp.co.za" />
                  </div>
                  <Button>Update Profile</Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <p className="font-medium">Company Registration</p>
                    <p className="text-sm text-gray-500 mb-2">Uploaded: 2024-02-15</p>
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Update
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="font-medium">Tax Clearance</p>
                    <p className="text-sm text-gray-500 mb-2">Uploaded: 2024-01-20</p>
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Update
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="font-medium">BEE Certificate</p>
                    <p className="text-sm text-gray-500 mb-2">Required</p>
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Applications</span>
                    <span className="font-bold">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pending Review</span>
                    <span className="font-bold">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Requires Action</span>
                    <span className="font-bold text-red-500">1</span>
                  </div>
                  <Button onClick={() => navigate('/finance')} className="w-full">
                    New Application
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-primary mb-6">My Applications</h2>

            <div className="space-y-6">
              {applications.map((app) => app.actionRequired && (
                <Alert key={`alert-${app.id}`}>
                  <Bell className="h-4 w-4" />
                  <AlertTitle>Action Required</AlertTitle>
                  <AlertDescription>
                    {app.actionRequired}
                  </AlertDescription>
                </Alert>
              ))}

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
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>{app.type}</TableCell>
                      <TableCell>{app.amount}</TableCell>
                      <TableCell>{getStatusBadge(app.status)}</TableCell>
                      <TableCell>{app.submitted}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          {app.actionRequired && (
                            <Button size="sm">
                              Upload Documents
                            </Button>
                          )}
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

      <Footer />
    </div>
  );
};

export default Dashboard;