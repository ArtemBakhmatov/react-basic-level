import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {
    const elements = data.map(item => {
        const {id, ...itemsProps} = item;
        return (
            //<EmployeesListItem name={item.name} salary={item.salary} />
            <EmployeesListItem 
                key={id} 
                {...itemsProps}
                onDelete={() => onDelete(id)} />  //получиться так же как и в 8-й строке -> это спред оператор
        )
    });

    

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;