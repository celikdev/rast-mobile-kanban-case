"use client";

import { TaskList } from "@/components/task";
import { useGetBoard } from "@/hooks/useBoard";
import { useMoveTask } from "@/hooks/useTask";
import { DndContext } from "@dnd-kit/core";
import { HashLoader } from "react-spinners";

// Açıklama: Sayfa URL içindeki parametreyi kullanarak board detaylarını getirir.
const BoardDetail = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useGetBoard(params.id);
  const { mutate: moveTaskMutate } = useMoveTask();

  return (
    <DndContext
      onDragEnd={(e) => {
        const { active, over } = e;
        moveTaskMutate({
          taskId: active.id,
          listId: over?.id,
        });
      }}
    >
      <div className="flex flex-col items-center py-10 gap-4 h-[96%]">
        {isLoading ? (
          <div className="flex w-full items-start justify-center">
            <HashLoader color="#F0FFFF" size={50} />
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-black text-teritary">{data.title}</h1>
            <div className="w-full h-[100%]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-10 px-10 h-[100%]">
                {data.lists.map((list: List) => (
                  <TaskList
                    key={Math.random().toString(36).substring(7)}
                    list={list}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </DndContext>
  );
};

export default BoardDetail;
