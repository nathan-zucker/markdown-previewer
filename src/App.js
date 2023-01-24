
import './App.css';
import React from 'react';
import { marked } from 'marked';


const defaultMarkup=`
# Hello, World
      
## I am a sub-heading
      
This is HTML **_MARKUP_**

<blockquote>I am a blockquote</blockquote>

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!


Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

<a href="https://github.com/nathan-zucker/markdown-previewer" target="_blank">Check out my GitHub</a>

- thing

**more text!**

![Cat](https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg)

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
    console.log(this.state.markup)
    return { __html: markup };
  }


  render(){
    return (
      <div className="App">
        <body id='body'>
          <div id='markup'>
            <p>i am deployed in the correct repository</p>
            <h2>HTML Markup</h2>
            <div>
              <textarea id="editor" onChange={this.updateMarkup}>{this.state.markup}</textarea>
            </div>
          </div>
          <div id='previewContainer'>
            <h2>Code Preview</h2>
            <div id='preview' dangerouslySetInnerHTML={this.getMarkdown()} />
          </div>
        </body>
      </div>
    )
  }
}

export default App;
