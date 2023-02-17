export interface rewards {
    lives: number,
    time: number,
    points: number,

}

export interface TestCase {
    input: string,
    output: string,
}

export interface GameTask {
    taskId: number,
    description: string,
    startCode: string,
    testCases: TestCase[],
    rewards: rewards,
}