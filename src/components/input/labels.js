import React from 'react';
import Text from '../text';
import './input.scss'

const   Lables = props => {
    return (
        <div className="row">
            <div>
            <Text
                                type="H4"
                                text={props.label + " : "}
                                className=""
                                
                            />
                  </div>
            <div className='ml-1'>
            <Text
                                type="H4"
                                text={props.text}
                                className=""
                                
                            />
                            </div>
            
         
        </div>
    );
};

export default Lables;
