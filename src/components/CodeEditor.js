import React from "react"
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as Editor } from "react-codemirror2"

function CodeEditor(props)
{

    function changeHandler(editor, data, value)
    {
        props.onChange(value);
    }

    return(
        <div className="editor-container">
                <div className="editor-title">
                    {props.languageTitle}
                    <button>FS</button>
                </div>
                <Editor
                onBeforeChange={changeHandler}
                value={props.value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping : true,
                    lint: true,
                    mode: props.language,
                    theme: 'material',
                    lineNumbers: true
                }}
                />
        </div>
    )
}

export default CodeEditor;