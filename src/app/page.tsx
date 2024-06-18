import { BoardList } from "@/components/board";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col items-center py-10 gap-4 h-[100%]">
      <span className="flex items-center w-full justify-center">
        <h1 className="text-6xl font-black text-teritary">Board List</h1>
        <Link
          href="/logs"
          className="border-2 rounded-lg p-4 text-sm font-semibold text-teritary hover:bg-teritary hover:text-secondary transition-colors duration-300 ml-4"
        >
          Visit Logs
        </Link>
      </span>
      <BoardList />
    </main>
  );
};

export default Home;
