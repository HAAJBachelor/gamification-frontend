const LanguageSelector = (props: any) => {
    return (
        <div className="text-yellow-500 pl-2">Language 
            <select className='bg-zinc-500 text-yellow-500 px-2 ml-4 shadow-2xl'
                    onChange={props.onChange}>
                <option value="java" selected>Java</option>
                <option value="csharp">C#</option>
                <option value="typescript">Typescript</option>
                <option value="javascript">Javascript</option>
                <option value="python">Python</option>
            </select>

        </div>
    );
};

export default LanguageSelector;