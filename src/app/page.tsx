import { Heading } from "@/components/core/heading";
import { Navbar } from "@/components/ui/navbar";
import { Container } from "../components/core/container";
import { ScalesY } from "@/components/core/scaleY";
import { ScaleX } from "@/components/core/scaleX";
import { Profile } from "@/components/ui/profile";

export default function Page() {
  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-screen">
        <ScaleX />
        <Navbar />
        <ScalesY />
        <Profile />
      </Container>
    </div>
  );
}
