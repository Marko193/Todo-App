import './styles.css';
export default function Header() {
    return (
        <div className='header'>
            <div className='header_first_block'>
                <div className='first_block_title'>Менеджер задач</div>
                <div className='first_block_author'>by Павленко Марк</div>
            </div>
            <div className='header_second_block'>
                <div className='second_block_tasks_number'>Задач: 1</div>
            </div>
        </div>

    )
}