import React, { useEffect, useState } from 'react'
import type {FlexSelectProps} from './type'
const FlexInput = ({
  blurContainerClassName,
  containerClassName,
  disabledOverlayElememt,
  focusContainerClassName,
  hasValueContainerClassName,
  selectProps,
  labelClassName,
  wrapperClassName,
  labelContent,
  beforeElement,
  afterElement,
  children
} : FlexSelectProps) => {
  const [focus,setFocus] = useState<boolean>(false);
  const [className,setClassName] = useState<string>(`${containerClassName ? containerClassName : ""} ${(selectProps?.value && hasValueContainerClassName) ? hasValueContainerClassName : "" }`);
  const [hasValue,setHasValue] = useState<boolean>(selectProps?.value ? true : false);
  function focusHandler(e : React.FocusEvent<HTMLSelectElement, Element>){
    setFocus(true);
    selectProps?.onFocus && selectProps.onFocus(e);
  }
  function blurHandler(e : React.FocusEvent<HTMLSelectElement, Element>){
    setFocus(false);
    selectProps?.onBlur && selectProps.onBlur(e);
  }
  function changeHandler(e : React.ChangeEvent<HTMLSelectElement>){
    selectProps?.onChange && selectProps.onChange(e);
    if(e.target.value){
      setHasValue(true);
    }else{
      setHasValue(false);
    }
  }

  useEffect(()=>{
    if(focus){
      setClassName(`${containerClassName ? containerClassName : ""} ${focusContainerClassName ? focusContainerClassName : ""} ${(hasValue && hasValueContainerClassName) ? hasValueContainerClassName : "" }`);
    }else{
      setClassName(`${containerClassName ? containerClassName : ""} ${blurContainerClassName ? blurContainerClassName : ""} ${(hasValue && hasValueContainerClassName) ? hasValueContainerClassName : "" }`);
    }
  },[focus,hasValue,containerClassName,blurContainerClassName,focusContainerClassName,hasValueContainerClassName])
  
  useEffect(()=>{
    const select = document.getElementById(selectProps?.id!);
    if(!selectProps?.value && select){
      if(selectProps?.defaultValue === "PLACEHOLDER"){
        select.setAttribute("data-select-placeholder","");
      }else{
        select.setAttribute("data-select-novalue","");
      }
    }else if(select){
      select.removeAttribute("data-select-novalue");
      select.removeAttribute("data-select-placeholder");
    }
  },[selectProps?.value])

  useEffect(()=>{
    if(disabledOverlayElememt || selectProps?.disabled){
      setFocus(false);
    }
  },[disabledOverlayElememt,selectProps?.disabled])

  return (
    <div style={{position : "relative"}} className={className}>
      {beforeElement}
      <div className={wrapperClassName}>
        <label className={labelClassName} htmlFor={selectProps?.id}>{labelContent}</label>
        <select {...selectProps} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler}>
          <option value={"NO_VALUE"} disabled hidden></option>
          <option value={"PLACEHOLDER"} disabled hidden>{selectProps?.placeholder}</option>
          {children}
        </select>
      </div>
      {afterElement}
      {(selectProps?.disabled || disabledOverlayElememt) && disabledOverlayElememt}
    </div>
  )
}
export default FlexInput