import React, {useState} from 'react'
import { IState as Props } from "../App"

interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string
        age: number
        url: string
        website:string
        note?: string | undefined
    }[]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {
const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    website: "",
    url: ""
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
setInput({
    ...input,
    [e.target.name]: e.target.value
})
}

const handleClick = ():void => {
if(
    !input.name || 
    !input.age ||
    !input.url
) {
    return 
}

setPeople([
    ...people, 
    {
        name: input.name, 
        age: parseInt(input.age), 
        url: input.url, 
        website: input.website, 
        note: input.note
    }
]);
}

  return (
   
    <div className="AddToList">
  
      <div className="form-group">
    <span>Name:</span>
    <input 
    className="form-field" 
    type="text" 
    placeholder="Full Name" 
    value={input.name}
    onChange={handleChange}
    name="name"
    />
</div>
      <div className="form-group">
    <span>Age:</span>
    <input 
    className="form-field" 
    type="text" 
    placeholder="Must be at least 18" 
    value={input.age} 
    onChange={handleChange}
    name="age"
    />
</div>
      <div className="form-group">
    <span>https://</span>
    <input className="form-field" 
    type="text" 
    placeholder="Profile picture" 
    value={input.url} 
    onChange={handleChange}
    name="url"
    />
</div>
      <div className="form-group">
    <span>https://</span>
    <input 
    className="form-field" 
    type="text" 
    placeholder="website" 
    value={input.website} 
    onChange={handleChange}
    name="website"
    />
</div>


<div className="form-group">
    <span>Note:</span>
    <textarea 
    className="form-field List"  
    placeholder="Share some notes" 
    value={input.note}
    onChange={handleChange}
    name="note"
    />
</div>

    <button className="AddToList-btn shrink-border" onClick={handleClick}>Add to List</button>

    </div>

  )
}

export default AddToList