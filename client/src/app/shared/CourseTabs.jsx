import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";

const CourseTabs = () => {
  return (
    <Tabs defaultValue="datascience" className="w-full p-10">
      <TabsList className="w-full flex flex-row justify-around">
        <TabsTrigger value="datascience">Data Science</TabsTrigger>
        <TabsTrigger value="itcertification">IT Certification</TabsTrigger>
        <TabsTrigger value="leadership">Leadership</TabsTrigger>
        <TabsTrigger value="web">Web Development</TabsTrigger>
        <TabsTrigger value="communication">Communication</TabsTrigger>
        <TabsTrigger value="ba">Business & Intelligence</TabsTrigger>
      </TabsList>
      <TabsContent
        value="datascience"
        className="flex flex-row gap-4 flex-wrap"
      >
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />

        <CourseCard />
      </TabsContent>
      <TabsContent value="itcertification">
        <CourseCard />
      </TabsContent>
      <TabsContent value="leadership">
        <CourseCard />
      </TabsContent>
      <TabsContent value="web">
        <CourseCard />
      </TabsContent>
      <TabsContent value="communication">
        <CourseCard />
      </TabsContent>
      <TabsContent value="ba">
        <CourseCard />
      </TabsContent>
    </Tabs>
  );
};

export default CourseTabs;
