import { Scales } from "@/components/core/scales";
import { Container } from "../components/core/container";
import { Heading } from "@/components/core/heading";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-screen">
        <Heading className="mt-10">Shabaz Ansari</Heading>
      </Container>
    </div>
  );
}
