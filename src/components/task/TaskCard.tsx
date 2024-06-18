import { useDraggable } from "@dnd-kit/core";

const TaskCard = ({ task }: { task: Task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    // @ts-ignore
    id: task._id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="bg-green-400 mx-4 rounded-lg p-4"
    >
      <h1 className="font-extrabold text-sm">{task.title}</h1>
      <p className="text-sm font-semibold opacity-50">{task.description}</p>
    </div>
  );
};

export default TaskCard;
