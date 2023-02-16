const URL = "https://localhost:7067/api"
export const GameSession = {

    Game: {
        NewSession: URL + "CreateSession",
        GenerateTask: URL + "GenerateTasks",
        SelectTask: URL + "SelectTask?taskId=",
        SubmitTask: URL + "SubmitTask"

    }

}