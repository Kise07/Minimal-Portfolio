import { ScaleX } from "@/components/core/scaleX";
import { ScalesY } from "@/components/core/scaleY";
import { Navbar } from "@/components/ui/navbar";
import { Profile } from "@/components/ui/profile";
import { Container } from "../components/core/container";

export default function Page() {
  return (
    <Container className="px-4 min-h-screen">
      <ScaleX />
      <Navbar />
      <ScalesY />
      <Profile />
      <ScalesY className="h-8 my-5" />
    </Container>
  );
}
