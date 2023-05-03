import React from "react";

type Props = {
    text: string
    test: string
    handleOnTestAllClick: () => void;
    handleOnClickSubmit: () => void;
    handleOnClickSkip: () => void;
    handleOnClickTips: () => void;
};

const actionButton = (callback: any, text: string, image: any) => {
    return (
        <>
            <button
                onClick={callback}
                className='flex flex-row overflow-hidden whitespace-nowrap xl:p-2 md:p-1 h-fit w-fit text-yellow-500 font-semibold hover:scale-125 border border-background hover:border-white rounded transition-all duration-300 mt-2 text-left rounded-2xl bg-gameComps shadow-lg shadow-yellow-900 transform'
            >
                {text}
                {image}
            </button>
        </>
    );
};

const Actions = (props: Props) => {
    return (
        <div className='flex flex-row sm:flex-col justify-evenly items-center h-full'>
            <button
                onClick={props.handleOnClickTips}
                className={"w-fit h-fit flex items-center justify-center align-center bg-gray-900 text-xl text-yellow-500 p-2 rounded-full border shadow-lg shadow-yellow-900 border-black transition-all hover:scale-125 hover:border-white"}>
                <svg version="1.1" id="information" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"
                     height="30px"
                     viewBox="0 0 256 256" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path stroke="#eab308" stroke-width="16" className="st0"
                              d="M107.328,65.772c3.092,2.371,6.659,4.144,10.602,5.27c3.436,0.981,7.128,1.479,10.973,1.479 c3.693,0,7.314-0.491,10.763-1.46c3.941-1.107,7.518-2.852,10.628-5.185c3.46-2.594,6.247-5.902,8.285-9.834 c2.106-4.067,3.174-8.663,3.174-13.66c0-5.058-1.069-9.688-3.18-13.767c-2.068-3.987-4.909-7.318-8.454-9.906 c-3.129-2.278-6.721-3.966-10.688-5.021c-3.383-0.895-6.924-1.348-10.527-1.348c-3.762,0-7.378,0.46-10.754,1.37 c-3.95,1.067-7.531,2.783-10.647,5.102c-3.573,2.662-6.392,6.1-8.379,10.22c-1.908,3.959-2.875,8.452-2.875,13.351 c0,4.842,0.968,9.303,2.875,13.253C101.075,59.688,103.838,63.101,107.328,65.772z"></path>
                        <path stroke="#eab308" stroke-width="16" className="st0"
                              d="M182.779,216.849c-3.32-2.14-7.015-2.14-9.459-2.14c0,0-0.655,0-0.721-0.001 c-1.004-0.148-2.538-0.43-3.473-0.643c-0.513-0.37-1.172-0.881-1.647-1.283c-0.449-0.956-1.05-2.448-1.272-3.23 c-0.116-1.957-0.262-8.937-0.262-17.325v-86.03c0-13.785-11.215-25-25-25h-35.199c-14.486,0-25,7.313-25,17.388 c0,3.795,0,11.692,7.622,15.553c1.5,0.761,3.565,1.341,6.142,1.726c3.274,0.489,5.382,0.887,6.198,1.15 c0.429,0.262,1.15,0.793,1.655,1.212c0.401,0.804,0.938,2.043,1.173,2.753c0.114,2.046,0.252,8.82,0.252,16.937v54.311 c0,7.735-0.351,15.923-0.627,18.766c-0.358,0.665-0.89,1.556-1.307,2.193c-0.628,0.371-1.462,0.823-1.991,1.076 c-1.125,0.22-3.524,0.575-4.138,0.624h-0.87c-1.564,0-4.819,0-7.852,1.931c-6.26,3.981-6.26,10.826-6.26,15.824 c0,10.074,10.514,17.387,25,17.387h58.244c14.486,0,25-7.313,25-17.387C188.988,227.666,188.988,220.853,182.779,216.849z"></path>
                        <path className="st1"
                              d="M128.903,63.846c-3.04,0-5.93-0.386-8.591-1.146c-2.892-0.826-5.484-2.109-7.706-3.813 c-2.403-1.839-4.312-4.201-5.668-7.019c-1.336-2.769-2.015-5.962-2.015-9.488c0-3.586,0.679-6.811,2.015-9.584 c1.374-2.848,3.307-5.212,5.747-7.029c2.233-1.662,4.832-2.901,7.726-3.683c2.638-0.71,5.492-1.069,8.493-1.069 c2.856,0,5.652,0.356,8.311,1.059c2.92,0.777,5.54,2.003,7.799,3.648c2.442,1.783,4.413,4.099,5.858,6.886 c1.466,2.832,2.206,6.117,2.206,9.773c0,3.594-0.74,6.848-2.202,9.671c-1.432,2.763-3.377,5.077-5.784,6.882 c-2.248,1.686-4.861,2.957-7.771,3.774C134.635,63.462,131.802,63.846,128.903,63.846z"></path>
                        <g>
                            <path className="st1"
                                  d="M177.361,225.254c-1.236-0.797-4.588-0.43-5.83-0.598s-5.573-0.891-6.697-1.469s-4.648-3.252-5.456-4.395 c-0.808-1.144-2.926-6.032-3.105-7.996s-0.327-10.32-0.327-18.57v-86.03c0-8.25-6.75-15-15-15h-35.199c-8.25,0-15,3.325-15,7.388 s0.409,5.755,2.145,6.634c0.624,0.316,2.307,0.637,3.094,0.754c2.44,0.365,6.753,1.009,8.823,1.909 c1.591,0.691,4.719,3.109,5.533,4.19s2.938,5.68,3.118,7.512s0.329,10.082,0.329,18.332v54.311c0,8.25-0.442,20.218-0.983,21.732 c-0.541,1.516-3.096,5.798-4.078,6.643s-4.697,2.901-5.915,3.242c-1.217,0.341-5.451,0.976-6.625,1.031 c-1.174,0.057-3.023-0.126-3.816,0.379c-1.595,1.015-1.627,3.324-1.627,7.387s6.75,7.387,15,7.387h58.244c8.25,0,15-3.324,15-7.387 S178.95,226.278,177.361,225.254z"></path>
                        </g>
                    </g>
                </svg>
            </button>
            <button
                onClick={props.handleOnClickSkip}
                className={"w-fit h-fit flex items-center justify-center align-center bg-gray-900 text-xl text-yellow-500 p-2 rounded-full border shadow-lg shadow-yellow-900 border-black transition-all hover:scale-125 hover:border-white"}>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="Media / Skip_Forward">
                            <path id="Vector"
                                  d="M17 5V19M6 10.5713V13.4287C6 15.2557 6 16.1693 6.38355 16.6958C6.71806 17.1549 7.23174 17.4496 7.79688 17.5073C8.44484 17.5733 9.23434 17.113 10.8125 16.1924L13.2617 14.7637L13.2701 14.7588C14.8216 13.8537 15.5979 13.4009 15.8595 12.8105C16.0881 12.2946 16.0881 11.7062 15.8595 11.1902C15.5974 10.5988 14.8188 10.1446 13.2617 9.2363L10.8125 7.80762C9.23434 6.88702 8.44484 6.42651 7.79688 6.49256C7.23174 6.55017 6.71806 6.84556 6.38355 7.30469C6 7.83111 6 8.74424 6 10.5713Z"
                                  stroke="#eab308" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </g>
                    </g>
                </svg>
            </button>
            <button
                onClick={props.handleOnClickSubmit}
                className={"w-fit h-fit flex items-center justify-center align-center bg-gray-900 text-xl text-yellow-500 p-2 rounded-full border shadow-lg shadow-yellow-900 border-black transition-all hover:scale-125 hover:border-white"}>
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="30px"
                     height="30px" viewBox="0 0 533.973 533.973">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <path
                                    stroke="#eab308" stroke-width="36"
                                    d="M477.931,52.261c-12.821-12.821-33.605-12.821-46.427,0l-266.96,266.954l-62.075-62.069 c-12.821-12.821-33.604-12.821-46.426,0L9.616,303.572c-12.821,12.821-12.821,33.604,0,46.426l85.289,85.289l46.426,46.426 c12.821,12.821,33.611,12.821,46.426,0l46.426-46.426l290.173-290.174c12.821-12.821,12.821-33.605,0-46.426L477.931,52.261z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
                {/*<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="30px"
                     height="30px" viewBox="0 0 78.369 78.369">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <path
                                stroke="#eab308" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"
                                d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704 c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z"></path>
                        </g>
                    </g>
                </svg>*/}
            </button>
        </div>
    );
};

export default Actions;
