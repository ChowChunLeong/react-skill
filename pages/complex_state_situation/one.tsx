import {Select } from "antd"
import { useState } from "react"

const One = () =>{
    const schoolClass = [
        "science",
        "business"
    ] 
    const schoolStudent = [
    {
        class:"science",
        student:["ting ting", "kar mun"]
    },{      
        class:"business",
        student:["leong", "keong"]
    }]
    const [optionSecondSelect,setOptionSecondSelect]:any = useState({})
    const [selectedSecondOpt,setSelectedSecondOpt]= useState<null | string>(null); 
    const { Option, OptGroup } = Select;

    const handleFirstSelectChange = (firstSelectOpt:string) =>{
        let newOptionSecondSelect = optionSecondSelect

        newOptionSecondSelect = schoolStudent.find((item:any)=> {
                                    return item.class == firstSelectOpt;
                                });
        setOptionSecondSelect(newOptionSecondSelect)
        setSelectedSecondOpt(null)
    }


    

    const render_select = () =>{
        return <div > 
                    <Select onChange={handleFirstSelectChange}>
                        <Option key="no_selected" value="">
                            No Selected
                        </Option>
                        {schoolClass.map((item:string)=>{
                            return <Option key={item}>
                                {item}
                            </Option>
                        })}
                    </Select>
                    <Select value={selectedSecondOpt} onChange={(item:string)=>{setSelectedSecondOpt(item)}}>
                        <Option key="no_selected" value="">
                            No Selected
                        </Option>
                       {
                           optionSecondSelect?.student?.map((item:any)=>{
                            return <Option key={item}>
                                {item}
                            </Option>
                           })
                               
                       }
                    </Select>
                </div>
        
    }

        
    return <div>
        {render_select()}
    </div>
}

export default One