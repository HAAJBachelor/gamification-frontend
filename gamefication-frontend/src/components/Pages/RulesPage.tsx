import {Title} from "../Title/Title";
import {Button} from "../UI/Button";
import NewCard from "../UI/NewCard";
import Header from "../Header/Header";


const RulesPage = () => {
    const rules = ["aaaaaaaa", "bbbbbbbb", "cccccccc", "dddddddd"];
    return (
        <div className='bg-black h-screen '>
            <Header/>
            <NewCard>
                <Title title="Regler"/>
                <ul className="mt-8 text-yellow-400 font-semibold marker:text-yellow-400 text-lg">
                    {rules.map(item => (
                        <li className="mt-2">
                            {item}
                        </li>))}
                </ul>
                <p className="mt-12 text-yellow-400 font-bold">HAPPY HACK!</p>
                <Button text="GO"/>
            </NewCard>
        </div>
    );

};

export default RulesPage;