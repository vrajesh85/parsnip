import React,{Component} from 'react';
import TaskList from './Tasklist';

const TASK_STATUSES = ['Unstarted','In Progress','Completed'];

class TaskPage extends Component{
    renderTaskLists(){
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return <TaskList key={status} status={status} tasks={statusTasks} />
        });
    }

    render(){
        return(
            <div className="tasks">
                <div className="tasks-lists">
                    {this.renderTaskLists()}
                </div>
            </div>
        );
    }

}

export default TaskPage;