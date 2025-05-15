import React from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Finance = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    toast({
      title: "Application Submitted",
      description: "We've received your finance application and will contact you shortly.",
    });
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Finance Application</h1>
          <p className="text-xl text-gray-200">
            Complete the form below to start your equipment finance application.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Business Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name*</Label>
                  <Input 
                    id="businessName"
                    placeholder="Your Business Name"
                    {...register("businessName", { required: true })}
                    className={errors.businessName ? "border-red-500" : ""}
                  />
                  {errors.businessName && <p className="text-red-500 text-sm">Business name is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="registrationNumber">Company Registration Number*</Label>
                  <Input 
                    id="registrationNumber"
                    placeholder="Registration Number"
                    {...register("registrationNumber", { required: true })}
                    className={errors.registrationNumber ? "border-red-500" : ""}
                  />
                  {errors.registrationNumber && <p className="text-red-500 text-sm">Registration number is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="yearsInBusiness">Years in Business*</Label>
                  <Input 
                    id="yearsInBusiness"
                    type="number"
                    placeholder="Number of Years"
                    {...register("yearsInBusiness", { required: true })}
                    className={errors.yearsInBusiness ? "border-red-500" : ""}
                  />
                  {errors.yearsInBusiness && <p className="text-red-500 text-sm">Years in business is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Primary Mining Activity*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="coal">Coal Mining</SelectItem>
                      <SelectItem value="gold">Gold Mining</SelectItem>
                      <SelectItem value="platinum">Platinum Mining</SelectItem>
                      <SelectItem value="diamonds">Diamond Mining</SelectItem>
                      <SelectItem value="chrome">Chrome Mining</SelectItem>
                      <SelectItem value="iron">Iron Ore Mining</SelectItem>
                      <SelectItem value="services">Mining Support Services</SelectItem>
                      <SelectItem value="exploration">Exploration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6 pt-4">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Name*</Label>
                  <Input 
                    id="contactName"
                    placeholder="Full Name"
                    {...register("contactName", { required: true })}
                    className={errors.contactName ? "border-red-500" : ""}
                  />
                  {errors.contactName && <p className="text-red-500 text-sm">Contact name is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position*</Label>
                  <Input 
                    id="position"
                    placeholder="Your Role"
                    {...register("position", { required: true })}
                    className={errors.position ? "border-red-500" : ""}
                  />
                  {errors.position && <p className="text-red-500 text-sm">Position is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    {...register("email", { required: true })}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input 
                    id="phone"
                    placeholder="Your Phone Number"
                    {...register("phone", { required: true })}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">Phone number is required</p>}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6 pt-4">Equipment & Financing Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="equipmentType">Equipment Type*</Label>
                  <Input 
                    id="equipmentType"
                    placeholder="Type of Equipment"
                    {...register("equipmentType", { required: true })}
                    className={errors.equipmentType ? "border-red-500" : ""}
                  />
                  {errors.equipmentType && <p className="text-red-500 text-sm">Equipment type is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="equipmentValue">Estimated Value*</Label>
                  <Input 
                    id="equipmentValue"
                    placeholder="ZAR"
                    {...register("equipmentValue", { required: true })}
                    className={errors.equipmentValue ? "border-red-500" : ""}
                  />
                  {errors.equipmentValue && <p className="text-red-500 text-sm">Equipment value is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="financeAmount">Finance Amount Required*</Label>
                  <Input 
                    id="financeAmount"
                    placeholder="ZAR"
                    {...register("financeAmount", { required: true })}
                    className={errors.financeAmount ? "border-red-500" : ""}
                  />
                  {errors.financeAmount && <p className="text-red-500 text-sm">Finance amount is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="financeTerm">Preferred Finance Term*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12 Months</SelectItem>
                      <SelectItem value="24">24 Months</SelectItem>
                      <SelectItem value="36">36 Months</SelectItem>
                      <SelectItem value="48">48 Months</SelectItem>
                      <SelectItem value="60">60 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea 
                  id="additionalInfo"
                  placeholder="Please provide any additional information that might help us process your application"
                  {...register("additionalInfo")}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="documents">Upload Documents</Label>
                <Input 
                  id="documents"
                  type="file"
                  multiple
                  className="cursor-pointer"
                />
                <p className="text-sm text-gray-500">
                  Upload financial statements, equipment quotes, or other relevant documents (PDF, DOC, or JPG format)
                </p>
              </div>

              <div className="pt-4">
                <Button type="submit" className="btn-secondary w-full md:w-auto">
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Finance;