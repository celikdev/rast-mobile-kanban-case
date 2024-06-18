import { useQuery } from "@tanstack/react-query"
import { getBoard, getBoards } from "@/services/board"

export const useGetBoards = () => {
    return useQuery({
        queryKey: ["boards"],
        queryFn: getBoards
    })
}

export const useGetBoard = (boardID: string) => {
    return useQuery({
        queryKey: ["board"],
        queryFn: () => getBoard(boardID)
    })
}