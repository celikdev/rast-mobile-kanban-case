import { POST, PUT } from "@/services/ClientBase";

const createTask = async (task: Task) => {
    await POST('/api/board/task', task)
}

// TODO:@celikdev update the type of the parameter
const moveTask = async ({ taskId, listId }: any) => {
    await PUT('/api/board/task', { taskId, listId })
}

export { createTask, moveTask }