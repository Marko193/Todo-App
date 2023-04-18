import './styles.css';
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_items'>
            <span className='item'>Мои задачи</span>
            <span className='item'>Выполенные</span>
            <span className='item'>Важные</span>
            </div>
        </div>
    )
}