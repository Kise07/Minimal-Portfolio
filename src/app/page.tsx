import { Profile } from "@/components/ui/profile";
import { Works } from "@/components/ui/work";

export default function Work() {
  return (
    <div className="relative m-4 grid grid-cols-1 gap-4 md:grid-cols-5">
      <div className="md:sticky md:top-4 md:col-span-2 md:h-[calc(100vh-2rem)]">
        <Profile className="md:col-span-2" />
      </div>
      <Works className="md:col-span-3" />
    </div>
  );
}
