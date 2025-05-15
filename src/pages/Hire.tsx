import React, { useState } from 'react';
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
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const Hire = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState("excavators");

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    toast({
      title: "Inquiry Submitted",
      description: "We've received your equipment hire inquiry and will contact you shortly.",
    });
    reset();
  };

  const equipmentCategories = [
    {
      id: "excavators",
      name: "Excavators",
      items: [
        { 
          name: "20-Tonne Excavator", 
          description: "Ideal for medium earthmoving tasks",
          image: "https://images.pexels.com/photos/2058911/pexels-photo-2058911.jpeg"
        },
        { 
          name: "30-Tonne Excavator", 
          description: "Suitable for larger earthmoving operations",
          image: "https://images.pexels.com/photos/2437227/pexels-photo-2437227.jpeg"
        },
        { 
          name: "45-Tonne Excavator", 
          description: "Heavy-duty excavation capabilities",
          image: "https://images.pexels.com/photos/2219122/pexels-photo-2219122.jpeg"
        },
      ]
    },
    {
      id: "loaders",
      name: "Wheel Loaders",
      items: [
        { 
          name: "Compact Wheel Loader", 
          description: "Versatile loader for tight spaces",
          image: "https://images.pexels.com/photos/2480570/pexels-photo-2480570.jpeg"
        },
        { 
          name: "Medium Wheel Loader", 
          description: "Balanced power and efficiency",
          image: "https://images.pexels.com/photos/2210475/pexels-photo-2210475.jpeg"
        },
        { 
          name: "Large Wheel Loader", 
          description: "High-capacity material handling",
          image: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg"
        },
      ]
    },
    {
      id: "dozers",
      name: "Dozers",
      items: [
        { 
          name: "D6 Dozer", 
          description: "Medium-sized earthmoving dozer",
          image: "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg"
        },
        { 
          name: "D8 Dozer", 
          description: "Heavy earthmoving capabilities",
          image: "https://images.pexels.com/photos/2058740/pexels-photo-2058740.jpeg"
        },
        { 
          name: "D10 Dozer", 
          description: "Extreme earthmoving power",
          image: "https://images.pexels.com/photos/1009928/pexels-photo-1009928.jpeg"
        },
      ]
    },
    {
      id: "trucks",
      name: "Haul Trucks",
      items: [
        { 
          name: "30-Tonne Dump Truck", 
          description: "Articulated hauling vehicle",
          image: "https://images.pexels.com/photos/2406790/pexels-photo-2406790.jpeg"
        },
        { 
          name: "45-Tonne Dump Truck", 
          description: "Medium-capacity hauling",
          image: "https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg"
        },
        { 
          name: "60-Tonne Dump Truck", 
          description: "High-capacity material transport",
          image: "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg"
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Equipment Hire</h1>
          <p className="text-xl text-gray-200">
            Access our premium mining equipment fleet without capital investment.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Available Equipment</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Browse our extensive range of mining equipment available for short and long-term hire.
            </p>
          </div>

          <Tabs defaultValue="excavators" className="mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              {equipmentCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  onClick={() => setSelectedTab(category.id)}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {equipmentCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {category.items.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover rounded mb-4"
                      />
                      <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-6">Equipment Hire Inquiry</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name*</Label>
                  <Input 
                    id="companyName"
                    placeholder="Your Company Name"
                    {...register("companyName", { required: true })}
                    className={errors.companyName ? "border-red-500" : ""}
                  />
                  {errors.companyName && <p className="text-red-500 text-sm">Company name is required</p>}
                </div>

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

                <div className="space-y-2">
                  <Label htmlFor="equipmentType">Equipment Type*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Equipment Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {equipmentCategories.find(c => c.id === selectedTab)?.items.map((item, index) => (
                        <SelectItem key={index} value={item.name}>{item.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hirePeriod">Estimated Hire Period*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-week">1 Week</SelectItem>
                      <SelectItem value="2-weeks">2 Weeks</SelectItem>
                      <SelectItem value="1-month">1 Month</SelectItem>
                      <SelectItem value="3-months">3 Months</SelectItem>
                      <SelectItem value="6-months">6 Months</SelectItem>
                      <SelectItem value="12-months">12 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectLocation">Project Location*</Label>
                  <Input 
                    id="projectLocation"
                    placeholder="City, Province"
                    {...register("projectLocation", { required: true })}
                    className={errors.projectLocation ? "border-red-500" : ""}
                  />
                  {errors.projectLocation && <p className="text-red-500 text-sm">Project location is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Required Start Date*</Label>
                  <Input 
                    id="startDate"
                    type="date"
                    {...register("startDate", { required: true })}
                    className={errors.startDate ? "border-red-500" : ""}
                  />
                  {errors.startDate && <p className="text-red-500 text-sm">Start date is required</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDetails">Project Details*</Label>
                <Textarea 
                  id="projectDetails"
                  placeholder="Please provide details about your project and specific equipment requirements"
                  {...register("projectDetails", { required: true })}
                  className={`min-h-[100px] ${errors.projectDetails ? "border-red-500" : ""}`}
                />
                {errors.projectDetails && <p className="text-red-500 text-sm">Project details are required</p>}
              </div>

              <div className="pt-4">
                <Button type="submit" className="btn-primary w-full md:w-auto">
                  Submit Inquiry
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

export default Hire;