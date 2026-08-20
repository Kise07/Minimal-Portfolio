import { Container } from "@/components/core/container";
import StackedItems from "@/components/work/minimal/staked-hover-items";

export default function Work() {
  return (
    <Container className="flex items-center justify-center m-auto mt-32">
      <StackedItems />
    </Container>
  );
}
