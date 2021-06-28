import React, { useEffect, useState,useRef } from 'react';
import SunEditor,{buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import options from './test.json'

const MyComponent = props => {

  const [cont,setCont] = useState('');
  const myDiv = useRef(null)
  let val = '<p>hello</p>'

  // useEffect(()=>{
  //   console.log("cont",cont)
  //   myDiv.current.innerHTML = cont
  // },[cont,setCont])

    const handleChange = (content)=>{
        console.log(content); 
        setCont(content)
    }

  return (
    <>
      <div>
        {/* {console.log(buttonList)} */}
      <SunEditor onChange={handleChange} setOptions={{
				    height: 200,
					buttonList: buttonList.complex  // Or Array of button list, eg. [['font', 'align'], ['image']]
					// Other option
			}}  defaultValue={val}/>
    </div>
    <div className="test" ref={myDiv}>

    </div>
    </>
  );
};
export default MyComponent;