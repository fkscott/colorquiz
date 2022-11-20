import React, { useEffect, useState } from "react";
import "react-widgets/styles.css";
import { useRecoilState } from "recoil";
import { testLengthAtom } from "../../recoil/atoms/testLengthAtom";
import "./NumberInput.css"
  

type InputFieldProps = {
    label: string;
    debug?: boolean;
}


function InputField(props: InputFieldProps) {



    const [value, setValue] = useRecoilState(testLengthAtom);

    return (
    <div className="inputFieldContainer">
         
        {props.label === "testLength" &&
            <div className="lengthLabel">
                Test Length
            </div>
        }

       <input
        type="number"
        className="lengthInput"
        value={value}
        onChange={e => setValue(e.currentTarget.valueAsNumber)}></input>
        </div>
    );
    {/*based number picker */}

}



export default InputField;