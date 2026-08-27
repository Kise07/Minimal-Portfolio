import { Container } from "@/components/core/container";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { SkeletonTwo } from "@/components/work/features/skeleton-2/second";

export default function Work() {
  return (
    <Container className="overflow-hidden flex items-center bg-neutral-300 rounded-3xl p-48 justify-center mt-32 ring-2 ring-black/80">
      <ModeToggle className="fixed top-10 right-10" />
      <SkeletonTwo />
    </Container>
  );
}
