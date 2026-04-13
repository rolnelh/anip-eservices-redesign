import TopbarConnected from "@/components/layout/TopbarConnected";
import Sidebar from "@/components/layout/Sidebar";
import HelpButton from "@/components/ui/HelpButton";
import BottomNav from "@/components/ui/BottomNav";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50">

            <div className="fixed top-0 left-0 right-0 z-20">
                <TopbarConnected />
            </div>

            <aside className="hidden md:block fixed top-[60px] left-0 w-[240px] h-[calc(100vh-60px)] z-10">
                <Sidebar />
            </aside>

            <main className="pt-[60px] pb-[70px] md:pb-0 md:ml-[240px] min-h-screen p-4 md:p-8 lg:p-12">
                {children}
            </main>

            <BottomNav />

            <div className="hidden md:block">
                <HelpButton />
            </div>

        </div>
    );
}