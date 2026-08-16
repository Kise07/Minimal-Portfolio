import { ScaleX } from "@/components/core/scaleX";
import { ScalesY } from "@/components/core/scaleY";
import { Navbar } from "@/components/ui/navbar";
import { Profile } from "@/components/ui/profile";
import { Container } from "../components/core/container";
import { HoverExit } from "@/components/work/hover-exit";

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <Container className="px-4 min-h-screen">
        <ScaleX />
        <Navbar />
        <ScalesY />
        <Profile />
        <ScalesY className="h-8 my-5" />
        <HoverExit />
      </Container>
    </div>
  );
}
