import { Button } from "@/components/ui/button";
import Banner from "./shared/Banner";
import Header from "./shared/Header";
import Tabs from "./shared/CourseTabs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Banner />
        <Tabs />
      </main>
    </div>
  );
}
