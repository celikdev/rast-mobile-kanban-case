import { queryClient } from "@/providers/QueryClientProvider"
import { createTask, moveTask } from "@/services/task"
import { useMutation } from "@tanstack/react-query"

export const useCreateTask = () => {
    return useMutation({
        mutationKey: ["task"],
        mutationFn: createTask,
        onSuccess: () => {
            // Açıklama: Mutasyon başarılı olduğunda board verisini invalidate eder ve yeni veriyi getirir.
            queryClient.invalidateQueries({
                queryKey: ["board"]
            })
        }
    })
}

export const useMoveTask = () => {
    return useMutation({
        mutationKey: ["task"],
        mutationFn: moveTask,
        onSuccess: () => {
            // Açıklama: Mutasyon başarılı olduğunda board verisini invalidate eder ve yeni veriyi getirir.
            queryClient.invalidateQueries({
                queryKey: ["board"]
            })
        }
    })
}