import Image from "next/image";
import { Heading } from "../core/heading";

export const Profile = () => {
  return (
    <section className="mt-10 px-4 flex items-baseline justify-start gap-4">
      <Image
        src=""
        alt="profile"
        width={100}
        height={100}
        className="rounded-full "
      />
      <Heading>Shabaz Ansari</Heading>
    </section>
  );
};
