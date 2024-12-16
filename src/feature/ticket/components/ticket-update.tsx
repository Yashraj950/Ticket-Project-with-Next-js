import { createTicket } from "@/app/tickets/actions/create-ticket";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@prisma/client";

type TicketUpdateFormProps = {
  ticket: Ticket;
};

const TicketUpdateForm = ({ ticket }: TicketUpdateFormProps) => {
  return (
    <form action={createTicket} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Ticket</Label>
      <Input id="title" name="title"  type="text"  defaultValue={ticket.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea name="content" id="content" defaultValue={ticket.content} />

      <Button type="submit">Update</Button>
    </form>
  );
};

export default TicketUpdateForm;
