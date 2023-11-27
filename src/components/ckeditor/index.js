import React from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CkEditorComponent = props => {
    return (

        <div className="form-field ">
            <label className="form-label">{props?.label}</label>

            <CKEditor
                editor={ClassicEditor}
                data={props.data}
                onReady={editor => {
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    props?.onChange(data)
                }}
                onBlur={(event, editor) => {
                }}
                onFocus={(event, editor) => {
                }}
            />

        </div>


    );
};

export default CkEditorComponent;
