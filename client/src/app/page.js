import { Button } from "@/components/ui/button";
import Banner from "./shared/Banner";
import Header from "./shared/Header";
import Tabs from "./shared/CourseTabs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Header />
        <Banner />
        <Tabs />
      </main>
    </div>
  );
}
