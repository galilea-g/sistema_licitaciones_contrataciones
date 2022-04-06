import React, {useState, useRef, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

import iconSee from '../../../assets/imagenes/view_file.png';
import iconEdit from '../../../assets/imagenes/editar.svg';
import iconEliminar from '../../../assets/imagenes/eliminar.svg';

import './Table.css';

const f_descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const f_getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => f_descendingComparator(a, b, orderBy)
    : (a, b) => -f_descendingComparator(a, b, orderBy);
}

/** 
 * This method is created for cross-browser compatibility, if you don't 
 * need to support IE11, you can use Array.prototype.sort() directly
 * 
 */
const f_stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

/** 
 * Returns head component of table with sort function
 * 
 * @param {*} propsTablaHead Object with keys tableHeaders and configuration getting from props.config
 * in global element EnhancedTable
 */
const EnhancedTableHead = (propsTablaHead) => {
  
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    propsTablaHead;
  const handler_createSort = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
          <TableCell padding="checkbox">
            {propsTablaHead.configuration.multiselect && 
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  'aria-label': 'select all desserts',
                }}
              />
            }
          </TableCell>
        {propsTablaHead.tableHeaders.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            colSpan={headCell.id === "acciones" ? propsTablaHead.configuration.actions.length : ""}
          >
            {/*Se valida si la tabla usará la funcionalidad de SORT */}
            {propsTablaHead.configuration.sort ?
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={handler_createSort(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
              : 
              headCell.label
            }
          </TableCell>
        ))}
        {propsTablaHead.configuration.actions.length > 0 && !propsTablaHead.reConfiguration.hidden &&
          <TableCell
            key="acciones"
            align="left"
            padding="normal"
            colSpan={propsTablaHead.configuration.actions.length}
          >
            Acciones
          </TableCell>
        }
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

/** 
 * Returns toolbar component of table with delete function
 * 
 * @param {*} propsTableToolbar Object with keys numSelected and configuration getting from props.config
 * in global element EnhancedTable
 */
const EnhancedTableToolbar = (propsTableToolbar) => {
  const { numSelected, configuration } = propsTableToolbar;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {configuration.title}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

/**
 * Component Table
 * @visibleName TableComponent
 * 
 * @param {config} Object
 * @example  {
 *              title: "Titulo de la tabla",
                actions: ["see","edit","delete"],
                pagination: true/false,
                paginationConfig: {
                    pageSize: 5
                },
                multiselect: true/false | Indica si tendrá multiselect
              }
 * @param array-objects registros
 * @param array-objects headers
 * @function fGetDataRow Función padre a la cual se le regresa el valor ID obtenido del registro

 * 
 * @author Galilea Granados <galilea.granados@sesaj.org>

 *  
*/
const EnhancedTable = (props) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('titulo');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(props.config.paginationConfig.pageSize);

  const handler_requestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handler_selectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = props.records.map((n) => n.folio);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  
  const handler_clickRow = (event, idRow, props) => {
    let idRowSelected = null;

    if(props.config.multiselect){
      const selectedIndex = selected.indexOf(idRow);
      let newSelected = [];
  
      if (selectedIndex === -1){
        newSelected = newSelected.concat(selected, idRow);
      }else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      }else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      }else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      if(event.target.id === ""){
        setSelected(newSelected);
      }
    }

    if(event.target.id !== "" || reConfig.hidden){
      const textRemove = "see_";

      if(event.target.id.includes("edit_")){
        textRemove = "edit_";
      }

      if(event.target.id.includes("delete_")){
        textRemove = "delete_";
      }

      idRowSelected = event.target.id.split(textRemove).pop();

      if(event.target.parentNode.id.includes("row_")){
        idRowSelected = event.target.parentNode.id.split("row_").pop();
      }

      props.fGetDataRow(idRowSelected);
    }
  };

  const handler_changePage = (event, newPage) => {
    setPage(newPage);
  };

  const handler_changeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (folio) => selected.indexOf(folio) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.records.length) : 0;

  const targetRef = useRef();
  const targetRef2 = useRef();
  const [reConfig, setReConfig] = useState({ width:0, height: 0, hidden: false });

  useLayoutEffect(() => {
    if (targetRef.current) {
      if(targetRef.current.offsetWidth < 700){
        setReConfig({
          hidden: true
        })
      }
      //console.log("Width de a tabla->",targetRef.current.offsetWidth)
      //console.log("Height de la fila->",targetRef2.current.offsetHeight)
      /*setReConfig({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });*/
    }
  }, []);

  return (
    <Box sx={{ width: '100%' }} ref={targetRef}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {typeof props.config.title == "string" && 
          <EnhancedTableToolbar numSelected={selected.length} configuration={props.config} />
        }
        <TableContainer className="table__adjust" >
          <Table
            sx={{ minWidth: 'auto' }}
            aria-labelledby="tableTitle"
            size='medium'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handler_selectAllClick}
              onRequestSort={handler_requestSort}
              rowCount={props.records.length}
              tableHeaders={props.headers}
              configuration={props.config}
              reConfiguration={reConfig}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `f_stableSort` call with:
                 rows.slice().sort(f_getComparator(order, orderBy)) */}
              {f_stableSort(props.records, f_getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  const keysRow = Object.keys(row)
                  const indexKeyId = keysRow.indexOf("id")
                  delete keysRow[indexKeyId]

                  return (
                    <TableRow
                      hover

                      key={"keyRow_" + row.id}

                      id={"row_" + row.id}
                      onClick={(event) => handler_clickRow(event, row.id, props)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      className={reConfig.hidden && "table__trOver"}
                    >
                      <TableCell padding="checkbox">
                        {props.config.multiselect && 
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        }                      
                      </TableCell>

                      {/*Se agregaron los registros tomando las llaves por registro */}

                      {keysRow.map((keyRow, index) => {
                        return(
                          <TableCell align="left">
                            <span className="text">{row[keyRow]}</span>
                          </TableCell>
                        )
                      })}
                      {/*Se valida que en la configuración se agregan las acciones */}
                      {props.config.actions.indexOf("see") > -1 && !reConfig.hidden &&
                        <TableCell align="right" style={{cursor:"pointer",width: 'auto'}} >
                          <img id={"see_" + row.id} src={iconSee}/>
                        </TableCell>
                      }
                      {props.config.actions.indexOf("edit") > -1 &&
                        <TableCell align="right" style={{cursor:"pointer",width: 'auto'}}>
                          <img id={"edit_" + row.id} src={iconEdit} />
                        </TableCell>
                      }
                      {props.config.actions.indexOf("delete") > -1 &&
                        <TableCell align="right" style={{cursor:"pointer", width: 'auto'}}>
                          <img id={"delete_" + row.id} src={iconEliminar} />
                        </TableCell>
                      }
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height:  53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {props.config.pagination && 
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={props.records.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handler_changePage}
            onRowsPerPageChange={handler_changeRowsPerPage}
          />
        }
      </Paper>
    </Box>
  );
}

export default EnhancedTable;