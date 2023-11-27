import React from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Text from "../text";
import parse from 'html-react-parser';


const TextHtmlParser = props => {
    return (

        <div className="text-readonly-item">
            <label className="text-readonly-item-label">{props.label}</label>

            {props.text && (
                <div>
                    {parse(props.text)}
                </div>
            )}


        </div>


    );
};

export default TextHtmlParser;
