import React, { useState, useEffect } from 'react';
import { NotebookEntry } from '@prisma/client';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'next/navigation'

const MyEditor = (entry: any) => {
  const [editorValue, setEditorValue] = useState<any | undefined>(undefined);

useEffect(() => {
  setEditorValue(entry.entry.content)
}, [entry])  

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],


    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent


    [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],
  ]


  return (
    <div className="w-{60%} h-full flex flex-col">
      <div className="flex-shrink-0 h-16 bg-gray-200 flex items-center px-4">
        <span className="text-lg font-semibold">{entry.entry.title}</span>
      </div>
      <div className="flex-grow p-4">
        {
          editorValue !== undefined?
          <ReactQuill
          className="h-full w-full border rounded"
          value={editorValue}
          onChange={(value) => setEditorValue(value)}
          modules={{
            toolbar: toolbarOptions,
          }}
          theme="snow"
        />:""
          
        }
      </div>
      <button>Save</button>
    </div>
  );
}

export default MyEditor;
