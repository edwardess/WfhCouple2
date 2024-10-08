"use client"

import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/formats';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';

interface CourseEnrollButtonProps {
  courseId: string;
  price: number;
}

const CourseEnrollButton = ({ courseId, price }: CourseEnrollButtonProps) => {
  const [isLoading, setIsloading] = useState(false);
  
  const onClick = async () => {
    try {
      setIsloading(true);

      // Simulate a successful enrollment by calling the new enroll endpoint
      const response = await axios.post(`/api/courses/${courseId}/enroll`);

      // Check the response to confirm enrollment was successful
      if (response.status === 200) {
        toast.success("Successfully enrolled in the course!"); // Show success message
      } else {
        toast.error("Enrollment failed."); // Handle failure
      }
    } catch (error) {
      toast.error("Something went wrong"); // Error handling
    } finally {
      setIsloading(false);
    }
  };

  return (
    <Button className='fixed bottom-0 w-full z-50 right-0 py-6 md:py-4 rounded-none md:rounded-full md:relative md:w-auto' 
            disabled={isLoading} 
            onClick={onClick}>
      Enroll For: {formatPrice(price)} {/* Optionally, you can change this text to just "Enroll" */}
    </Button>
  );
}

export default CourseEnrollButton;
