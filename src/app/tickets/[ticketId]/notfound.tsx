import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";
import Link from "next/link";

export default function NotFound() {
    return (
        <Placeholder label="Ticket not found" 
        button={
            <Button asChild>
                <Link href={ticketsPath()}>GO to tickets</Link>
            </Button>
        }/>


       
    );
}