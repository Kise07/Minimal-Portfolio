import { Profile } from "@/components/ui/profile";
import { Works } from "@/components/ui/work";

export default function Work() {
  return (
    <div className="m-4 relative overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4">
      <Profile />
      <Works />
    </div>
  );
}
