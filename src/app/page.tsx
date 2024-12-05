import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h2 className="text-x">Home Page</h2>
      <Link href="./tickets" className="underline">
      GO TO TICKET PAGE
      </Link>
    </div>
  );
};

export default Homepage;
 