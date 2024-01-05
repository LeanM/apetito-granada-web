import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import { createUseStyles } from 'react-jss';
import { colors } from '../../../assets/colors';

export default function MenuModal(props){
    const { open } = props;
    const classes = useStyles();

    return (
        <Modal overflow={true} className={classes.container} open={open} onClose={props.onClose}>
        <div className={classes.header}>
          <p style={{fontWeight:"700", fontSize:"1.2rem", color:colors.nav}}>Menu Plates</p>
        </div>
        <Modal.Body>
          <Placeholder.Paragraph rows={35} />
        </Modal.Body>

        <div className={classes.header}>
            <button className={classes.closeButton} onClick={props.onClose}>
                Close
            </button>
        </div>
      </Modal>
    )
}

const useStyles = createUseStyles({
    container:{
       width:"70%",
       height:"80vh",
    },
    header:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    closeButton:{
        width:"5rem",
        height:"2rem",
        backgroundColor: colors.textNav,
        border: `solid 1px ${colors.navLight}`,
        borderRadius:"10px",
        color: colors.nav,

        transition:"background 0.5s, border 0.5s",

        "&:hover": {
          backgroundColor: colors.nav,
          border: `solid 1px ${colors.navLight}`,
          color: colors.textNav,
        },
    }
});