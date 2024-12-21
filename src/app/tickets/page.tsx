import CardCompact from "@/components/card-compact";
import Heading from "@/components/heading";
import RedirectToast from "@/components/redirect-toast";
import Spinner from "@/components/spinner";
// import TicketCreateForm from "@/feature/ticket/components/ticket-create-form";
import TicketList from "@/feature/ticket/components/ticket-list";
import TicketUpsertForm from "@/feature/ticket/components/ticket-upsert-form";
import { Suspense } from "react";

const TicketPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-9 ">
      <Heading title="Tickets" description="All your tickets at one place 🎟️" />
      <CardCompact
        title="create Ticket"
        description="A new ticket will be created"
        className="w-full  max-w-[420px] self-center"
        content={<TicketUpsertForm  />}
      />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>


  );
};

export default TicketPage;
