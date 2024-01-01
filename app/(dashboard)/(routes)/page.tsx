import { UserButton } from "@clerk/nextjs";
export default function DashboardLayout() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
