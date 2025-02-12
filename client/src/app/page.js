import { Button } from "@/components/ui/button";
import Banner from "./shared/Banner";
import Header from "./shared/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Header />
        <Banner />
      </main>
    </div>
  );
}
