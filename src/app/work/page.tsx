import { Container } from "@/components/core/container";
import { SkeletonOne } from "@/components/work/features/skeleton-2/first";

export default function Work() {
  return (
    <Container className="flex items-center justify-center m-auto mt-32">
      <SkeletonOne />
    </Container>
  );
}
