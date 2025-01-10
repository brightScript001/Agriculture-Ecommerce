import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../App";
import SignupForm from "@auth/components/SignUpForm";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/SignupForm">
                <SignupForm/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;