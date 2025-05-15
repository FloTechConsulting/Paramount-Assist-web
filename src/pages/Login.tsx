import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Login = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [userType, setUserType] = React.useState('applicant');

  const onSubmit = (data) => {
    if (userType === 'admin' && data.email === 'admin@example.com' && data.password === 'admin123') {
      localStorage.setItem('userRole', 'admin');
      navigate('/admin/dashboard');
    } else {
      localStorage.setItem('userRole', 'applicant');
      navigate('/applicant/dashboard');
    }
    
    toast({
      title: "Login Successful",
      description: "Welcome back!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Track your applications and manage your account
            </p>
          </div>
          
          <div className="mt-8 bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <Label>Account Type</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Account Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="applicant">Applicant</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">Email is required</p>
                )}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                  className={errors.password ? "border-red-500" : ""}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">Password is required</p>
                )}
              </div>

              <div>
                <Button type="submit" className="w-full btn-primary">
                  Sign in
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;