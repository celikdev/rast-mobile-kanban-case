import { useQuery } from "@tanstack/react-query"
import { getBoards } from "@/services/board"

export const useGetLists = () => {
    return useQuery({
        queryKey: ["board"],
        queryFn: getBoards

    })
}