import React,{ useState } from 'react';
const marked = require("marked");



const App = () => {



	const placholderMessage = `
	# This is React Markdown Previewer Project
	## This is a sub-heading...
	### And here's some other cool stuff:
	Heres some code
	`;

	const [ text, setText ] = useState(placholderMessage)


	const handleChange = (e) => {
		setText(e.target.value)
	}
	return (
		<div className="markdown-preview">
			<div className="container">
				<h3 className="text-center my-3">Markdown Previewer</h3>
				<div className="row">
					<div className="col-md-6">
						<div className="editor">
							<h3>Markdown Code</h3>
							<textarea name="code" id="markdownCode" onChange={handleChange}>{text}</textarea>
						</div>
					</div>
					<div className="col-md-6">
						<div className="output-section">
							<h3>Output</h3>
				            <div className="output" dangerouslySetInnerHTML = {{__html: marked(text)}}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default App;