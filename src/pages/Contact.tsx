
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

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll be in touch shortly.",
    });
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">
            Get in touch with our team for any inquiries or assistance.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name*</Label>
                  <Input 
                    id="name"
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address*</Label>
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
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company"
                    placeholder="Your Company"
                    {...register("company")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Inquiry Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="finance">Equipment Finance</SelectItem>
                      <SelectItem value="hire">Equipment Hire</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message*</Label>
                  <Textarea 
                    id="message"
                    placeholder="How can we help you?"
                    {...register("message", { required: true })}
                    className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
                </div>

                <Button type="submit" className="btn-secondary w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Head Office</h3>
                <div className="space-y-2 text-gray-600">
                  <p>123 Mining Road</p>
                  <p>Perth, WA 6000</p>
                  <p>Australia</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Phone</h3>
                  <p className="text-gray-600">(08) 1234 5678</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
                  <p className="text-gray-600">info@paramountassist.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:30 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 w-full">
        {/* This would be a map in a production environment */}
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Google Map would be embedded here</span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
