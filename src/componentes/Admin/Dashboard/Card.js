
import "./Dashboard.css" 
import TableC from "../../UI/Table/Table";

function Card(props){
	 const tableHeaders = [
        {
            id: 'idC',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Id',
        },
        {
            id: 'info',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Info',
        },
        {
            id: 'estatus',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Estatus',
        }
    ];

    const tableConfig = {
        title: false,
        actions: ["see"],
        pagination: false,
        paginationConfig: {
            pageSize: 5
        },
        multiselect: false
    }

    return(
        <div>
            <div className="title">{props.title}</div>
            <div>
            <TableC 
            	headers={tableHeaders}
            	records={props.data}
            	config={tableConfig}
            />              
            </div>
          </div>

    );
}


export default Card;