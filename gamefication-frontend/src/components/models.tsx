export interface rewards {
    lives: number,
    time: number,
    points: number,

}

export interface TestCase {
    input: string,
    output: string,
    error: string,
}

export interface GameTask {
    taskId: number,
    description: string,
    inputDescription: string,
    outputDescription: string,
    constraints: string,
    startCode: string,
    testCases: TestCase[],
    rewards: rewards,
    difficulty: string
}

export interface TestCaseResult {
    success: boolean,
    error: boolean,
    description: string,
}

export interface TaskResult {
    success: boolean,
    testCaseResults: TestCaseResult[],

}

export interface State{
    _points: number,
    _lives: number,
    _time: number,

}