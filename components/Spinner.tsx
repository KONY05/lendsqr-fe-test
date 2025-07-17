import { Loader } from "lucide-react";

export function Spinner() {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  );
}