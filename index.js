marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();
const defaultContent = `# Hello
## I'm Neye...
### And here's some cool stuff:
[Would You Like To See a Really Cute Puppy](https://www.dailypaws.com/living-with-pets/pet-compatibility/cutest-puppies)
**fireflies** 
\`Hi\`
-Still 
-Learnin
-New
-Stuff
> You're Cute Jeans
- hi.
  - you seem nice.
     - do i seem nice.
        - i think i do.
        \`<impressive\`
        \`\`\`
        multi
        line
        code
        \`\`\`
![nice message](https://poster.keepcalmandposters.com/default/6029613_i_hope_you_had_a_good_time.jpg)

`;
function App() {
    const [text,setText] = React.useState(defaultContent);
    
    return (
    <div className="text-center px-4">
        <h1 className="p-4">My Markdown Previewer</h1>
        <textarea
         name="text" 
        id="editor" 
         rows="10" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea"
         ></textarea>
    <h3 className="mt-3">Output</h3>
    <Preview markdown={text} />
    </div>
    
    );
    }
    function Preview({ markdown }) {
        return (
            <div
            dangerouslySetInnerHTML={{
                __html: marked(markdown, { renderer: renderer}),
            }}
            id="preview"
            ></div>
        );
    }
    ReactDOM.render(<App/>,document.getElementById('root'));
    
    
