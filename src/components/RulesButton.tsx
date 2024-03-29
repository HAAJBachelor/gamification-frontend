import React from 'react';
import {Button, Container} from "react-floating-action-button";

const RulesButton = (props: any) => {
    return (
        <div>
            <Container>
                <Button
                    icon="fa fab-plus"
                    rotate={true}
                    onClick={props.openModal}
                    styles={{"background": "#FACC14", "fontWeight": "bold", "fontSize": "1.5rem"}}
                >?</Button>
            </Container>
        </div>
    );
};

export default RulesButton;