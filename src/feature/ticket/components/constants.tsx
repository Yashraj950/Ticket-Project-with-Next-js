import{CircleCheck, FileText ,  Pencil} from "lucide-react";



const TICKET_ICONS = {
    OPEN: <FileText  className= "  bg-green-100  rounded-2xl text-green-400"/>,
  IN_PROGRESS:<Pencil className=" bg-green-100  rounded-2xl text-blue-400"/>,
     DONE: <CircleCheck className=" bg-yellow-100  rounded-2xl text-yellow-400" />,
  };

  export {TICKET_ICONS}