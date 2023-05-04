import FlexSelect from "./component"
import React, { useState } from "react";
import {createRoot} from "react-dom/client";
import "../styles/index.css"
const App = () =>{
    const [value,setValue] = useState<string>();

    function selectHandler(e : React.SyntheticEvent<HTMLSelectElement, Event>){
        setValue((e.target as HTMLSelectElement).value);
    }

    return(
        <main>
            <form onSubmit={(e)=>e.preventDefault()}>

                <FlexSelect
                     containerClassName="container"
                     labelContent={"myLabel"}
                     wrapperClassName="wrapper"
                     labelClassName="label"
                     hasValueContainerClassName="onValue"
                     focusContainerClassName="container-focus"
                     selectProps={{ 
                            id : "my-select-1",
                            onChange : selectHandler,
                            value : "my",
                            className : "select"
                        }}
                    >
                    <option value="hey">hey</option>
                    <optgroup title="my ghroup" label="my group">
                        <option value="yo">yo</option>
                        <option value="my">my</option>
                    </optgroup>
                </FlexSelect>

                <FlexSelect
                     containerClassName="container"
                     wrapperClassName="wrapper"
                     labelClassName="label"
                     hasValueContainerClassName="onValue"
                     focusContainerClassName="container-focus"
                     selectProps={{ 
                            id : "my-select-3",
                            defaultValue : "NO_VALUE",
                            onChange : selectHandler,
                            value,
                            className : "select"
                        }}
                    >
                    <option value="hey">hey</option>
                    <optgroup title="my ghroup" label="my group">
                        <option disabled value="yo">yo</option>
                        <option value="my">my</option>
                    </optgroup>
                </FlexSelect>

                <FlexSelect
                     containerClassName="container"
                     wrapperClassName="wrapper"
                     labelClassName="label"
                     hasValueContainerClassName="onValue"
                     focusContainerClassName="container-focus"
                     selectProps={{ 
                            id : "my-select-2",
                            defaultValue : "PLACEHOLDER",
                            placeholder : "placeholder",
                            onChange : selectHandler,
                            value,
                            className : "select"
                        }}
                    >
                    <option value="hey">hey</option>
                    <optgroup title="my ghroup" label="my group">
                        <option value="yo">yo</option>
                        <option value="my">my</option>
                    </optgroup>
                </FlexSelect>

                <FlexSelect
                    containerClassName="container"
                    labelContent={"myLabel"}
                    wrapperClassName="wrapper"
                    labelClassName="label"
                    hasValueContainerClassName="onValue"
                    focusContainerClassName="container-focus"
                    selectProps={{ 
                            id : "my-select-4",
                            onChange : selectHandler,
                            value,
                            className : "select",
                            placeholder : "Select A Option",
                            // defaultValue : "NO_VALUE" // if defaultValue is NO_VALUE then nothing will be displayed if value is undefined
                            defaultValue : "PLACEHOLDER" // if default value is set to PLACEHOLDER then placeholder value will be displayed if value is undefined
                        }}
                    >
                    <option value="option 1">option 1</option>
                    <optgroup label="Group 1">
                        <option value="option 2">option 2</option>
                        <option value="option 3">option 3</option>
                    </optgroup>
                </FlexSelect>
            </form>
        </main>
    )
}

const root = createRoot(document.getElementById("root")!);

root.render(<App/>)