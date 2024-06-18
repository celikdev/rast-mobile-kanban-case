import { GET, POST } from "@/services/ClientBase";

const getBoards = async () => {
    const response = await GET('/api/board')
    return response.data
}

const getBoard = async (boardID: string) => {
    const response = await GET(`/api/board/${boardID}`)
    return response.data
}

const createBoard = async (board: Board) => {
    const response = await POST('/api/board', board)
    return response.data
}

export { getBoards, getBoard, createBoard }