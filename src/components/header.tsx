import { LucideKanban } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { homepath, ticketsPath } from "@/paths";
import Link from "next/link";
import ThemeSwitcher from "./theme/theme-switcher";

const Header = () => {
  return (
    <nav
      className=" supports-backdrop-blur:bg-background/60
       fixed left-0 right-0 top-0 z-20
        border-b bg-background/95 backdrop-blur
         w-full flex py-2.5 px-5 justify-between"
    >
      <div className="flex align-items gap-x-2">
        <Link
          href={homepath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <LucideKanban />
          <h1 className=" ml-2 text-lg font-semibold">TicketBounty</h1>
        </Link>
      </div>
      <div className="flex align-items gap-x-2">
        <ThemeSwitcher />
        {/* <Button> */}
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
        {/* </Button> */}
      </div>
    </nav>
  );
};

export default Header;
