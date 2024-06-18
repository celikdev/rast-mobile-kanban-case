import { createLog } from "@/services/log";
import Link from "next/link";

const BoardCard = ({ board }: { board: Board }) => {
  return (
    <Link
      onClick={() => createLog({ message: `${board.title} Viewed` })}
      href={`/board/${board._id}`}
      key={board._id}
      className="text-center shadow-lg rounded-lg bg-secondary flex items-center justify-center transition-colors duration-300 hover:bg-secondary/60"
    >
      <h1 className="font-semibold text-lg text-teritary">{board.title}</h1>
    </Link>
  );
};

export default BoardCard;
