import React, { useState, useEffect } from 'react';
import { NotebookEntry } from '@prisma/client';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'next/navigation'
import { AnyCnameRecord } from 'dns';

const MyEditor = (entry: any, topicId: any) => {
  const [editorValue, setEditorValue] = useState<any | undefined>(undefined);
  const params = useParams();

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

  const onSave = async () => {
    try {
      const entryId: string = params.id[0];
      const entryIdNum = parseInt(entryId, 10);
      console.log(entryIdNum)
      const response = await fetch("/api/notebookEntries?entryId=" + params.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: entryIdNum,
          content: editorValue
        })
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (e) {
      console.error("error here" + e);
      return new Response(JSON.stringify({ error: "Unable to update entry" }), {
        status: 500,
      });
    }
  };

  

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
         <button  onClick={onSave} className="bg-buttonColor text-white px-4 py-2 rounded hover:bg-gray-400">
          Save
        </button>
      </div>
    </div>
  );
}

export default MyEditor;
