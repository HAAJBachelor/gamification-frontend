const DEV_URL = "https://localhost:7067/api"
const PROD_URL = "https://oxxgame.azurewebsites.net/api"
const URL = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL


export const API = {
    WEB_SOCKET_URL: process.env.NODE_ENV === 'development' ? "wss://localhost:7067/ws" : "wss://oxxgame.azurewebsites.net/ws",

    createSession: async (): Promise<Response> => {
        return await fetch(`${URL}/CreateSession`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers":
                    "Content-Type, Authorization, Set-Cookie",
            },
        })
    },

    getSelectedTask: async (): Promise<Response> => {
        return await fetch(`${URL}/GetSelectedTask`, {
            credentials: 'include',
        })
    },
    getState: async (): Promise<Response> => {
        return await fetch(`${URL}/GetState`, {
            credentials: 'include',
        })
    },
    submitUsername: async (username: string): Promise<Response> => {
        return await fetch(`${URL}/SubmitUsername?username=${username}`, {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    },
    runTestCase: async (code: string, taskId: number): Promise<Response> => {
        return await fetch(`${URL}/SubmitTestCase?index=${taskId}`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            body: JSON.stringify(code)
        })
    },
    runTestTaskTestCase: async (code: string, taskId: number): Promise<Response> => {
        return await fetch(`${URL}/SubmitTestTaskTestCase?index=${taskId}`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            body: JSON.stringify(code)
        })
    },
    selectTask: async (taskId: number): Promise<Response> => {
        return await fetch(`${URL}/SelectTask?taskId=${taskId}`, {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    },
    getStartCode: async (lang: string, test?: boolean): Promise<Response> => {
        return await fetch(`${URL}/GetStartCode?language=${lang}&test=${!!test}`, {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    },
    submitTask: async (code: string): Promise<Response> => {
        return await fetch(`${URL}/SubmitTask`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            body: JSON.stringify(code)
        })
    },
    isGameSessionActive: async (): Promise<Response> => {
        return await fetch(`${URL}/IsGameSessionActive`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Access-Control-Allow-Headers": "Authorization",
            },
        })
    },
    generateTasks: async (): Promise<Response> => {
        return await fetch(`${URL}/GenerateTasks`, {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Set-Cookie',
            }
        })
    },
    selectTaskForTestings: async (taskId: string): Promise<Response> => {
        return await fetch(`${URL}/SelectTaskForTesting?taskId=${taskId}`, {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    },

    skipTask: async (): Promise<Response> => {
        return await fetch(`${URL}/SkipTask`, {
            method: "GET",
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    },
}