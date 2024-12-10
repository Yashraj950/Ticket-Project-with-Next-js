// import { PlaceholderValue } from "next/dist/shared/lib/get-img-props"

import { MessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactElement;
};

const Placeholder = ({
  label,
  icon = <MessageSquareWarning />,
  button =<div/>,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, { className: "w-12 h-12 text-red-700" })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, { className: "h-10" })}
     
    </div>
  );
};

export default Placeholder;
