import { createTicket } from "@/app/tickets/actions/create-ticket";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";

const TicketCreateForm = () => {



  return (
    <form action={createTicket} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Ticket</Label>
      <Input type="text" name="title" id="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea name="content" id="title" />

      <Button type="submit">Create</Button>
    </form>
  );
};

export default TicketCreateForm;
