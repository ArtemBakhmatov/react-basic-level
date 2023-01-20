import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
    const elements = data.map(item => {
        return (
            //<EmployeesListItem name={item.name} salary={item.salary} />
            <EmployeesListItem {...item}/>  //получиться так же как и в 8-й строке -> это спред оператор
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;