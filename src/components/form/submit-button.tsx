import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type submitButtonProps = {
  label: string;
};

export const SubmitButton = ({label}: submitButtonProps) => {
  const { pending } = useFormStatus();
return (
    
  <Button disabled={pending} type="submit">
  {pending && <LucideLoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
 {label}
</Button>
)
};
