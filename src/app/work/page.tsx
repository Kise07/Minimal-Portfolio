import { Profile } from "@/components/ui/profile";
import { Works } from "@/components/ui/work";

export default function Work() {
  return (
    <div className="relative m-4 grid grid-cols-1 gap-4 overflow-hidden md:grid-cols-3">
      <div className="md:sticky md:top-4 md:h-[calc(100vh-2rem)]">
        <Profile />
      </div>
      <Works className="m-6" />
    </div>
  );
}
