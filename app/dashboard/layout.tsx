import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid lg:grid-cols-5 min-h-screen">
      <Sidebar className="col-auto" />
      <div className="col-span-3 lg:col-span-4 lg:border-l px-4 py-6">{children}</div>
    </main>
  );
}
