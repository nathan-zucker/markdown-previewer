import logo from './logo.svg';
import './App.css';
import React from 'react';
import { marked } from 'marked';


const defaultMarkup=`
# Hello, World
      
## I am a sub-heading
      
This is HTML _MARKUP_
      
Here's some code, \`<div></div>\`, between 2 backticks.

`

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      markup: defaultMarkup
    }
    this.updateMarkup = this.updateMarkup.bind(this)
    this.getMarkdown = this.getMarkdown.bind(this)

  }

  updateMarkup(event){
    this.setState({markup: event.target.value})
  }

  getMarkdown(){
    const markup = marked.parse(this.state.markup)
    return { __html: markup };
  }


  render(){
    return (
      <div className="App">
        <body id='body'>
          <div id='markup'>
            <h2>HTML Markup</h2>
            <div>
              <textarea onChange={this.updateMarkup}>{this.state.markup}</textarea>
            </div>
          </div>
          <div id='preview'>
            <h2>Code Preview</h2>
            <div id='codePreview' dangerouslySetInnerHTML={this.getMarkdown()} />
          </div>
        </body>
      </div>
    )
  }
}

export default App;
