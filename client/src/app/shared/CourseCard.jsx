import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CourseCard = () => {
  return (
    <Card className="w-[320px]">
      <CardHeader>
        <CardTitle>
          <Image
            src="/images/course.jpg"
            alt="course-card"
            width={400}
            height={400}
          />
        </CardTitle>
        <CardDescription className="text-2xl text-black font-bold">
          ChatGPT Masterclass: Navigating AI and Prompt Engineering
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex flext-row justify-normal gap-4">
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Premium
        </Button>
        <Button variant="outline">Best Seller</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
