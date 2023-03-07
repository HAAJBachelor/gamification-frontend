const LanguageSelector = (props: any) => {
    return (
        <div>
            <select className='bg-gameComps text-yellow-500 border-2 border-background ml-4 shadow-2xl'
                    onChange={props.onChange}>
                <option value="java" selected>Java</option>
                <option value="csharp">C#</option>
            </select>

        </div>
    );
};

export default LanguageSelector;