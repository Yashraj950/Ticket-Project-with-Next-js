import { ticketsPath } from "@/paths";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-9">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home</h2>
        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          GO TO TICKET PAGE
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
