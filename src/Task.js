import { IoTrashOutline } from 'react-icons/io5';
import { FcCheckmark } from 'react-icons/fc'
export default function Task({taskList, deleteTask, completeTask}) {
    return (
        <div className='task-container'> 
        {
        taskList.map(item =>
            <p key={item.id} className={item.isChecked ? "completed" : ""} style={item.isChecked ? { opacity: '0.3'} : {opacity: '1'}}>{item.title}
            <span><FcCheckmark size={25} onClick={() => completeTask(item.id)}/><IoTrashOutline size={25} onClick={() => deleteTask(item.id)} /></span></p>
        )
        }
    </div>
    )
}