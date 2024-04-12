import { WidgetItem } from "@/components";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <WidgetItem />
    </div>
  );
}