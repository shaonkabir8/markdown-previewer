import React,{ useState } from 'react';
import './styles.css'



const marked = require("marked");


// Placeholder Information to store on State
const placholderMessage = `
# React Markdown Previewer Project of FCC
## This is a sub-heading(h2)...
### And here's some other cool stuff: (h3)
a simple dummy paragraph here......
`;



const App = () => {

	const [ text, setText ] = useState(placholderMessage)

	
	// Textarea Change Handler
	const handleChange = (e) => {
		setText(e.target.value)
	}


	return (

		<div className="markdown">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<div className="editor">
							<h3 className="editor-heading">#Editor</h3>
	            			<textarea className="editor-content" onChange={handleChange}>{text}</textarea>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<div className="preview">
							<h3 className="preview-heading">#Preview</h3>
	            			<div className="preview-content" dangerouslySetInnerHTML = {{__html: marked(text)}}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default App;



