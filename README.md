FlexSelect - A Flexible and Unstyled Select Component for React
=============================================================

FlexSelect is a highly flexible and unstyled select component for React that allows you to create custom select components with ease. With its simple design, FlexSelect can adapt to various use cases and design needs, making it a perfect choice for any project that requires customizable selects.

Installation
------------

To install FlexSelect, run the following command:


```
npm install rd-flexselect
```

Usage
-----

To use FlexSelect, simply import it and use it in your React components:


>⚠️ **Warning: Best Practices for Select Components** ⚠️ :
Attributes such as `data-select-novalue` or `data-select-placeholder` can be used to determine whether the select element is currently displaying an empty value or a placeholder value. These attributes are helpful in designing select components to meet your specific needs. To ensure that these attributes work correctly, make sure to include the `value` and `id` attributes in selectProps. Additionally, you must provide an `id` for the label element to work properly.



```js
//MyComponent.tsx

import FlexSelect from "rd-flexselect"
import React, { useState } from "react";
import "../styles/index.css"
const App = () =>{
    const [value,setValue] = useState<string>();
    function changeHandler(e : React.SyntheticEvent<HTMLSelectElement, Event>){
        setValue((e.target as HTMLSelectElement).value);
    }
    return(
            <form>
                <FlexSelect
                    containerClassName="container"
                    labelContent={"myLabel"}
                    wrapperClassName="wrapper"
                    labelClassName="label"
                    hasValueContainerClassName="onValue"
                    focusContainerClassName="container-focus"
                    selectProps={{ 
                            id : "my-select-1",
                            onChange : changeHandler,
                            value,
                            className : "select",
                            placeholder : "Select A Option",
                            // defaultValue : "NO_VALUE" // if defaultValue is NO_VALUE then nothing will be displayed if value is undefined
                            // defaultValue : "PLACEHOLDER" // if default value is set to PLACEHOLDER then placeholder value will be displayed if value is undefined
                        }}
                    >
                    <option value="option 1">option 1</option>
                    <optgroup label="Group 1">
                        <option value="option 2">option 2</option>
                        <option value="option 3">option 3</option>
                    </optgroup>
                </FlexSelect>
            </form>
    )
}

```

```css
/* styles.css */
.container{
    display: flex;
    flex-direction: row;
    border: .2rem solid black;
    width: 100%;
    transition: 0.3s ease;
}
.wrapper{
    display: flex;
    flex-direction:  column;
    position: relative;
    width: 100%;
}
.select{
    border: 0;
    outline: none;
    height: 100%;
    width: 100%;
    padding: 1rem;
}
.label{
    position: absolute;
    top: 0;
    background: white;
    transform: translateY(-50%);
    padding: 0 .5rem;
    left: .5rem;
}

.after,.before{
    white-space: nowrap;
    background-color: black;
    padding: 1rem;
    text-align: center;
    color: white;
}
.container-focus{
    border-color: green;
}

.container-focus .after{
    color: green;
}

select[data-select-placeholder]{
    color: red;
}
option{
    color: gray;
}
optgroup{
    color: gray;
}
```


### Props

FlexSelect accepts the following props:


* `selectProps` : The props to be passed to the select element.

* `labelContent` : The content of the label. Can be a string or a ReactNode.

* `containerClassName` : The CSS class to be applied to the container element.

* `focusContainerClassName` : The CSS class to be applied to the container element when it is in focus.

* `blurContainerClassName` : The CSS class to be applied to the container element when it loses focus.

* `hasValueContainerClassName` : The CSS class to be applied to the container element when select has a value.

* `wrapperClassName` : The CSS class to be applied to the wrapper element of label and select.

* `labelClassName` : The CSS class to be applied to the label element.

* `disabledOverlayElememt` : A JSX element to be displayed over the select when it is disabled. If this prop is provided, the select is automatically considered as disabled.

* `beforeElement` : A JSX element to be displayed before the select.

* `afterElement` : A JSX element to be displayed after the select.

Contribution
------------

Contributions are welcome and appreciated! If you find any issues or have suggestions for improvement, please submit a pull request or create an issue on the [GitHub repository](https://github.com/developerx167/rd-flexselect/issues).

License
-------

FlexSelect is [MIT licensed](https://github.com/developerx167/rd-flexselect/blob/master/LICENSE).

Thanks
------

Thanks for using FlexSelect! If you have any questions or suggestions, feel free to open an issue or pull request.