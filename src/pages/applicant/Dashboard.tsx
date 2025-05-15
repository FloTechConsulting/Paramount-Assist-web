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
      amount: "$150,000",
      status: "Documents Required",
      submitted: "2024-03-15",
      actionRequired: "Please upload last 6 months of bank statements",
    },
    {
      id: 2,
      type: "Equipment Hire",
      amount: "$25,000",
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
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-primary">My Applications</h1>
              <Button onClick={() => navigate('/finance')}>
                New Application
              </Button>
            </div>

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
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
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