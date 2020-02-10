import React from 'react';

const App = () => {
	return (
		<div className="markdown-preview">
			<div class="container">
				<h3 class="text-center my-3">Markdown Previewer</h3>
				<div class="row">
					<div class="col-md-6">
						<div class="editor">
							<h3>Markdown Code</h3>
							<textarea name="code" id="markdownCode"></textarea>
						</div>
					</div>
					<div class="col-md-6">
						<div class="output">
							<h3>Output</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default App;