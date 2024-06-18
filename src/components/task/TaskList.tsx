"use client";

import { Modal } from "@/components/modal";
import TaskCard from "./TaskCard";
import { useState } from "react";
import { useCreateTask } from "@/hooks/useTask";
import { HashLoader } from "react-spinners";
import { useDroppable } from "@dnd-kit/core";
import { createLog } from "@/services/log";

const TaskList = ({ list }: { list: List }) => {
  const [isCreateTask, setIsCreateTask] = useState<boolean>(false);
  const { mutate, isPending } = useCreateTask();

  const { isOver, setNodeRef } = useDroppable({
    id: list._id,
  });

  return (
    <div
      ref={setNodeRef}
      className="bg-secondary h-max rounded-lg shadow-lg py-4 flex flex-col gap-6 overflow-y-auto overflow-x-hidden"
      style={{ zIndex: 999999999 }}
    >
      <div className="flex justify-between mx-4">
        <h1 className="text-lg font-bold text-teritary text-center">
          {list.title}
        </h1>
        <button
          onClick={() => {
            setIsCreateTask(true);
            createLog({ message: `${list.title} Opened Create Task Modal` });
          }}
          className="border-2 px-4 rounded-lg text-sm text-teritary font-semibold transition-colors duration-300 hover:bg-teritary hover:border-teritary hover:text-secondary"
        >
          Create
        </button>
        <Modal isOpen={isCreateTask} onClose={() => setIsCreateTask(false)}>
          <Modal.Header>
            <h1 className="text-xl font-extrabold w-full text-center">
              Create Task
            </h1>
            <button>Close</button>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const createTaskForm = new FormData(
                  e.target as HTMLFormElement
                );
                mutate({
                  title: createTaskForm.get("title") as string,
                  description: createTaskForm.get("description") as string,
                  listID: list._id,
                });
                createLog({
                  message: `Task Created in ${list.title} 
                with title: ${createTaskForm.get("title") as string}
                  `,
                });
              }}
              className="flex flex-col items-center w-full gap-4"
            >
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="border-2 font-semibold text-sm rounded-lg p-2 w-1/2 outline-none transition-colors duration-300 hover:border-primary focus:border-primary"
              />
              <textarea
                name="description"
                placeholder="Description"
                className="border-2 font-semibold text-sm rounded-lg p-2 w-1/2 outline-none transition-colors duration-300 hover:border-primary focus:border-primary"
              />
              <button
                type="submit"
                // @ts-ignore
                className={`
                  border-2 border-primary px-8 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 hover:bg-primary hover:text-teritary disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500 ${
                    isPending && "bg-primary"
                  }
                  `}
              >
                {isPending ? (
                  <HashLoader size={20} color="#F0FFFF" />
                ) : (
                  "Create"
                )}
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
      {list.tasks.length > 0 ? (
        list.tasks.map((task: Task) => <TaskCard key={task._id} task={task} />)
      ) : (
        <div className="bg-red-600 mx-4 rounded-lg p-4">
          <h1 className="text-center text-lg font-semibold text-teritary">
            Task Bulunamadı!
          </h1>
        </div>
      )}
    </div>
  );
};

export default TaskList;
