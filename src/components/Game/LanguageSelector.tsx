type Props = {
    onChange: (event: any) => void
    selectedLanguage: string
}

const LanguageSelector = (props: Props) => {
    const languages = ["csharp", "java", "javascript", "python", "typescript"]
    const languagesDisplayName = ["C#", "Java", "JavaScript", "Python", "TypeScript"]

    return (
        <div className="text-yellow-500">
            <select className='bg-zinc-500 text-yellow-500 pl-1 shadow-2xl outline-0'
                    onChange={props.onChange}>
                {languages.map((language, index) => {
                    return <option value={language}
                                   selected={language === props.selectedLanguage}>{languagesDisplayName[index]}</option>
                })
                }
            </select>
        </div>
    );
};

export default LanguageSelector;