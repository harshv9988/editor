import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class EditorConvertToHTML extends Component {
    constructor(props){
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
            
          }

        this.divRef = React.createRef();
    }
  
  

  componentDidMount(){
    // let htmlText = this.createElementFromHTML()
    // let reactdiv = document.querySelector('#test');
    // // console.log(reactdiv)
    // reactdiv.append(htmlText);
  }

  componentDidUpdate(){
    let htmlText = this.createElementFromHTML()
    console.log("html",htmlText)
    // let reactdiv = document.querySelector('#test');
    // // console.log(reactdiv)
    // console.log('html',htmlText)
    // reactdiv.append(htmlText);
    this.divRef.current.innerHTML = htmlText

  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

   createElementFromHTML = () => {
    console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
    let htmlString = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    htmlString = htmlString.trim(); // Never return a text node of whitespace as the result
    return htmlString
    // var template = document.createElement('template');
    // template.innerHTML = htmlString;
    // return template.content;
  };

  render() {
    
    const { editorState } = this.state;
    return (
      <>
        <div style={{width:'80%',height:500}}>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          
        />
      </div>
      
        <div  ref={this.divRef} id="test" style={{border:'1px solid black',textAlign:"center"}}></div>
      </>
    );
  }
}

export default EditorConvertToHTML;