import { buttonVariants } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth-options";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";

const DashboardPage = async () => {
    const session = await getAuthSession();

    return (
        <main className="flex-1 sm:px-10 py-6 sm:py-10">
            <div className="border-b pb-6">
                <h1 className="font-semibold text-2xl">Dashboard</h1>
                <p className="font-light text-muted-foreground">
                    This is your subscription dashboard
                </p>
            </div>
            <section className="py-8">
                {session?.user.role === "MEMBER" ? (
                    <HaveMembership />
                ) : (
                    <DontHaveMembership />
                )}
            </section>
        </main>
    );
};

const HaveMembership = () => {
    return (
        <Fragment>
            <h2 className="font-medium">Membership</h2>
            <p className="text-muted-foreground text-sm font-light">
                Verelx gym membership
            </p>
        </Fragment>
    );
};

const DontHaveMembership = () => {
    return (
        <Fragment>
            <h3 className="text-lg mb-3">You don not have any membership</h3>
            <Link
                href="/billing"
                className={cn(buttonVariants({ size: "lg" }))}
            >
                <span>Buy a Membership</span>
            </Link>
        </Fragment>
    );
};

export default DashboardPage;
