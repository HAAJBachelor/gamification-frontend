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
    title: string,
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
    compilerError: boolean,
    compilerErrorMessage: string,
    testCaseResults: TestCaseResult[],
}

export enum RunningState {
    InTask,
    TaskSelect,
    GameEnded
}

export interface State {
    _points: number,
    _lives: number,
    _time: number,
    _runningState: RunningState
}