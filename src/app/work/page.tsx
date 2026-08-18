import { Container } from "@/components/core/container";
import { CardsGrid } from "@/components/work/layouts/cards-grid-layout";

export default function Work() {
  return (
    <Container className="flex items-center justify-center m-auto mt-32">
      <CardsGrid />
    </Container>
  );
}
