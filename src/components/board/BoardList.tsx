"use client";

import { useGetBoards } from "@/hooks/useBoard";
import BoardCard from "./BoardCard";
import { HashLoader } from "react-spinners";

const BoardList = () => {
  const { data, isLoading } = useGetBoards();

  return (
    <div className="flex w-full h-[100%]">
      {isLoading ? (
        <div className="flex items-center justify-center w-full">
          <HashLoader color="#F0FFFF" size={50} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:grid-rows-2 gap-10 w-full mx-10 rounded-lg">
          {data?.map((board: Board) => (
            <BoardCard key={board._id} board={board} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BoardList;
