import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
// import { initialTickets } from "../../data";

const TICKET_ICONS = {
  OPEN: "😇",
  DONE: "💕",
  IN_PROGRESS: "👼",
};

const TicketPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-9">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
        <p className="text-sm text-muted-foreground">
          All your tickets at one place 🎟️
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center gap-y-5">
        {initialTickets.map((ticket) => (
          <div key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-50 rounded">
            {/* <div className="flex flex-cl">{TICKET_ICONS[ticket.status]}</div> */}
           
            <h3 className="text-lg truncate font-semibold "><span className="pr-3 ">{TICKET_ICONS[ticket.status]}</span>{ticket.title}</h3>

            <p className="text-sm pl-10 truncate text-slate-500" > {ticket.content}</p>

            <Link href={ticketPath(ticket.id)} className="pl-10 text-sm text-blue-600 hover:text-blue-400 underline">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketPage;
