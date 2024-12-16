import CardCompact from "@/components/card-compact";
import { getTicket } from "../queries/get-ticket";
import { notFound } from "next/navigation";
import TicketUpdateForm from "@/feature/ticket/components/ticket-update";

type TicketEditPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketEditPage = async({ params }: TicketEditPageProps) => {

    const ticket = await getTicket(params.ticketId);    

    if (!ticket) {
      notFound();
    }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Edit Ticket"
        description="Edit your ticket"
        className="w-full  max-w-[420px] animate-fade-in-from-top"
        content={<TicketUpdateForm  ticket={ticket}/>}
      />
    </div>
  );
};

export default TicketEditPage;
