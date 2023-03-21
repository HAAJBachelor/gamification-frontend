import {useEffect, useState} from "react";
import {SessionRecord} from "./models";

const LeaderBoard = () => {

    const [list, setList] = useState<SessionRecord[]>([]);
    useEffect(() => {
        fetch("https://localhost:7067/api/GetLeaderboard/")
            .then(response => response.json())
            .then((response: SessionRecord[]) => {
                console.log(response)
                setList(response)
            })
            .catch((error: Error) => {
                console.log(error.message)
            })
    }, [])

    return (
        <>
            <div
                className='fixed font-bold text-gray-500 top-28 left-6 right-0 w-1/3 min-w-[16rem] h-96 p-0 bg-yellow-200 rounded animate-[scaleupdownopacity_1s_ease-in-out_1] text-center overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900'>
                <span className={"pb-2 underline decoration-4 underline-offset-2 bg-yellow-200 sticky top-0 block"}>LEADERBOARD</span>
                <table className='table-fixed mt-0 w-full'>
                    <thead className={"text-justify sticky top-6 bg-yellow-200 mt-0 pt-0 border-b-4"} style={{zIndex:1}}>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    {list.map(user => {
                        return (
                            <tr className="text-center bg-gray-300 border-b-2 max-h-full break-words">
                                <td className="ml-2 mt-1">
                                    <svg
                                        width='30px'
                                        height='30px'
                                        viewBox='0 0 1024 1024'
                                        className='icon'
                                        version='1.1'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='#fff'
                                        stroke='#fff'
                                        stroke-width='10.24'
                                    >
                                        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                                        <g
                                            id='SVGRepo_tracerCarrier'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        ></g>
                                        <g id='SVGRepo_iconCarrier'>
                                            <path
                                                d='M875.093671 630.867537m-119.731835 0a119.731836 119.731836 0 1 0 239.463671 0 119.731836 119.731836 0 1 0-239.463671 0Z'
                                                fill='#FAE1DC'
                                            ></path>
                                            <path
                                                d='M148.906329 630.867537m-119.731836 0a119.731836 119.731836 0 1 0 239.463671 0 119.731836 119.731836 0 1 0-239.463671 0Z'
                                                fill='#FAE1DC'
                                            ></path>
                                            <path
                                                d='M522.530334 596.542529m-401.352121 0a401.35212 401.35212 0 1 0 802.704241 0 401.35212 401.35212 0 1 0-802.704241 0Z'
                                                fill='#FAE1DC'
                                            ></path>
                                            <path
                                                d='M878.268646 411.441486H166.792021c-29.103938 55.562063-45.649085 118.744066-45.649085 185.841871 0 54.32735 10.830193 106.079443 30.409205 153.316016h741.956386c19.543735-47.236573 30.409205-99.023943 30.409205-153.316016-0.035278-67.097805-16.580425-130.279808-45.649086-185.841871zM343.35591 650.481827c-39.016915 0-70.660833-31.643918-70.660833-70.660833 0-39.016915 31.643918-70.660833 70.660833-70.660833s70.660833 31.643918 70.660833 70.660833c0 39.016915-31.60864 70.660833-70.660833 70.660833z m348.57698 0c-39.016915 0-70.660833-31.643918-70.660833-70.660833 0-39.016915 31.643918-70.660833 70.660833-70.660833 39.016915 0 70.660833 31.643918 70.660833 70.660833 0 39.016915-31.60864 70.660833-70.660833 70.660833zM225.564337 326.14049c64.557825 37.358873 168.167844 61.594515 284.971647 61.594515 126.081786 0 236.676749-28.222 299.541254-70.731388-72.953871-75.105798-174.941124-121.848486-287.899679-121.848486-117.509353 0-223.200744 50.51738-296.613222 130.985359z'
                                                fill='#200C04'
                                            ></path>
                                            <path
                                                d='M516.956489 130.420918m-104.350846 0a104.350846 104.350846 0 1 0 208.701692 0 104.350846 104.350846 0 1 0-208.701692 0Z'
                                                fill='#200C04'
                                            ></path>
                                        </g>
                                    </svg>
                                </td>
                                <td className="ml-2 mt-1">{user.username}</td>
                                <td className="ml-2 mt-1">{user.score}</td>
                                <td className="ml-2 mt-1">{user.time}</td>
                            </tr>)
                    })}
                </table>
            </div>
        </>
    );
}
    ;

    export default LeaderBoard;
  