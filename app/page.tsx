import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { FiExternalLink } from "react-icons/fi";
import CoursesList from "@/components/Course/CoursesList";
import BentoGrid from "@/components/BentoGrid";
import Image from "next/image";
import Home_CoursesList from "@/components/Home/Home_CourseList";

const courses = [
  {
    title: "Social Media Management",
    image: "https://images.unsplash.com/photo-1724754608847-afa768169635?w=900&auto=format&fit=crop", 
  },
  {
    title: "Social Media Strategy",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=900&auto=format&fit=crop", // Add image URL when available
  },
  {
    title: "Social Media Marketing",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop", // Add image URL when available
  },
  {
    title: "Funnel Creation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop", // Add image URL when available
  },
  {
    title: "Advertising on Social Media",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&auto=format&fit=crop", // Add image URL when available
  },
  {
    title: "Landing Page Optimization",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=900&auto=format&fit=crop", // Add image URL when available
  },

];

const courses2 = [
  {
    title: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fEFJfGVufDB8fDB8fHww",
  },
  {
    title: "Marketing",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nfGVufDB8fDB8fHww",
  },
  {
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Content Creation for Social Media",
    image: "https://images.unsplash.com/photo-1655718355750-b3d2f0c99f4b?w=900&auto=format&fit=crop", // Add image URL when available
  },
  {
    title: "Analytics and Reporting for Social Media",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop", // Add image URL when available
  },
  {
    title: "Building a Brand on Social Media",
    image: "https://images.unsplash.com/photo-1553285991-4c74211f5097?w=900&auto=format&fit=crop", // Add image URL when available
  },
  {
    title: "Engagement Strategies",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop", // Add image URL when available
  },

];

interface courseProps {
  image: string;
  title: string;
}
const CourseImage = ({ course }: { course: courseProps }) => {
  return (
    <div className="w-full !w-[410px] h-[260px] rounded-xl border-2 !mx-4 group relative overflow-hidden">
      <span className="opacity-0 duration-300 group-hover:opacity-100 absolute z-50 bottom-0 left-0 text-foreground bg-background px-4 py-2 text-lg rounded-tr-xl">
        {course.title}
      </span>
      <Image
        width={1000}
        height={500}
        src={course.image}
        alt="image"
        className="h-full w-full object-cover"
      />
    </div>
  );
};




const page = () => {
  const { userId } = auth();

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col items-center justify-center h-full container gap-6 pt-10 md:pt-24 lg:pt-36">
        {/* Logo Image */}
        <img 
          src="https://s3.amazonaws.com/mavstorage/67056c85dbf30_WFHCOUPLELOGO2.png" // Your logo image URL
          alt="Logo" 
          className="mb-4 h-24 w-24 rounded-full object-cover" // Adjust size and make it circular
        />
        <h1 className="font-bold text-2xl max-w-none sm:text-3xl sm:max-w-3xl md:text-4xl md:max-w-4xl lg:text-6xl lg:max-w-6xl text-center">
          BREW YOUR FUTURE, <br/> ONE {" "}
          <span className="text-primary">QUALITY SIP</span> AT A TIME
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl text-center font-light">
          We understand that learning can feel overwhelming. Instead of trying to absorb everything at once, take small, quality sips of knowledge that build your skills gradually. Our platform is designed to guide you through each step, making your learning journey not just easier but also more enjoyable. Together, let's brew your skills and craft a future where knowledge unfolds naturally, at your own pace.
        </p>
        <div className="flex items-center justify-center gap-3">
          {userId ? (
            <Link className={cn(buttonVariants({ size: "lg" }), "duration-300 transition-all")} href="/dashboard">
              Dashboard
            </Link>
          ) : (
            <>
              <Link className={cn(buttonVariants({ size: "lg" }), "duration-300 transition-all")} href="/sign-up">
                Sign up
              </Link>
            </>
          )}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center h-full gap-6 py-14 w-screen">
        <Marquee pauseOnClick={true} className="!rotate-[-4deg]" speed={30}>
          {courses.map((item, index) => (
            <CourseImage course={item} key={index} />
          ))}
        </Marquee>
        <Marquee
          pauseOnClick={true}
          className="!rotate-[-4deg]"
          gradientWidth={250}
          speed={30}
          direction="right"
        >
          {courses2.map((item, index) => (
            <CourseImage course={item} key={index} />
          ))}
        </Marquee>
      </section>
    </div>
  );
};

export default page;
