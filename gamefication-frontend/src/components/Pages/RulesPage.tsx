import { Logo } from "../Logo";
import { Title } from "../Title/Title";
import { Button } from "../UI/Button";
import Card from "../UI/Card";


const RulesPage = () => {
    const rules = ["aaaaaaaa", "bbbbbbbb", "cccccccc", "dddddddd"];
    return (
        <>
            <Logo />
            <Card>
                <Title title="Regler"/>
                <ul className="mt-8 text-yellow-400 font-semibold marker:text-yellow-400 text-lg">
                    {rules.map(item=>(<li className="mt-2">{item}</li>))}
                </ul>
                <p className="mt-12 text-yellow-400 font-bold">HAPPY HACK!</p>
                <Button text="GO"/>
            </Card>    
        </>
                
        
    );
        
};

export default RulesPage;