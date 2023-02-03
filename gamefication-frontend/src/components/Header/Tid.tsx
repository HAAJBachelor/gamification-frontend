
export const Tid = () => {
    const today = new Date();
    const time = today.toLocaleTimeString();    

    return (
        <div>Tid: {time}</div>
    );
}
