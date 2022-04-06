import React from 'react'
import { Paper, Card, Typography, makeStyles, Button} from '@material-ui/core'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

export default function PageHeader(props) {
     
    const classes = useStyles();
    const { title, subTitle, icon } = props;

    const guardarHandler =() =>{
        console.log('entre al modal')
    }


    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>

                        <h2>Edición y creación de Actas</h2>

                <CKEditor
                    editor={ ClassicEditor }
                    //config = { editorConfiguration }
                    data='<ul><li class="active"><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Products</a></li><li><a href="#">Services </a><ul ><li><a href="#">Engage</a></li>li><a href="#">Pontificate</a></li><li><a href="#">Synergize</a></li></ul></li> </ul>'
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                        editor.editing.view.change((writer) => {
                        writer.setStyle(
                            "height",
                            "400px",
                            editor.editing.view.document.getRoot()
                        );
                        writer.setStyle(
                            "width",
                            "100%",
                            editor.editing.view.document.getRoot()
                        );
                        });
                    }}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        //Data=data;
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } 
                }
                />
                 <Button color="secondary" variant="contained" onClick={guardarHandler}> Guardar </Button>
                </div>
            </div>
        </Paper>
    )
}
