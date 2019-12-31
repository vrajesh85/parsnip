import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Task = props => {
    return(
        <div className="task">
            <div className="task-header">
                <div>
                     {props.task.title}
                </div>
            </div>
            <hr />
            <div className="task-body">{props.task.description}</div>
        </div>
    );
}

export default Task;