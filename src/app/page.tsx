import Heading from "@/components/heading";
import { ticketsPath } from "@/paths";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-9">
      <Heading  title="Home" description="You home place to start"/>
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          GO TO TICKETS
        </Link>
      </div>
      
    </div>
  );
};

export default Homepage;
