import { Container } from "@/components/core/container";
import { AnimateBackground } from "@/components/work/animationSequence/animate-bg";

export default function Work() {
  return (
    <Container className="flex items-center justify-center m-auto">
      <AnimateBackground />
    </Container>
  );
}
