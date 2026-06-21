import DeveloperPageContent from "@/components/sections/developer/DeveloperPage";

// /developer is a legacy URL. The canonical portfolio is at /.
// Both render the same content for backward compatibility.
export default function DeveloperPage() {
  return <DeveloperPageContent />;
}

