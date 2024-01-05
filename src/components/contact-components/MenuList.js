import { createUseStyles } from "react-jss";
import { colors } from "../../assets/colors";
import { useContext } from "react";
import CartContext from "../../context/CartProvider";

export default function MenuList(){
    const classes = useStyles();
    const { cart } = useContext(CartContext);
    console.log(cart);
    return (
        <div className={classes.container}>
            {
                cart.map((menu)=>{
                    const firstWord = menu.categoryMenu.split(" ")[0];
                    return (
                        <div className={classes.item}>
                            <img className={classes.itemImage} src={"./categories/" + firstWord + ".jpg"}></img>
                            <p className={classes.itemText}>{menu.categoryMenu}</p>

                        </div>
                    );
                })
            }
        </div>
    );
}

const useStyles = createUseStyles({
    container:{
        width:"20rem",
        height:"15rem",
        borderRadius:"10px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        border: `solid 2px ${colors.nav}`,
        backgroundColor: colors.textNav,
        overflowY:"scroll",
        padding:"10px",
    },
    item:{
        width:"100%",
        minHeight:"3.5rem",
        display:"flex",
        padding:"5px",
        justifyContent:"flex-start",
        alignItems:"center",
        fontSize:"1rem",
        fontWeight:"700",
        borderRadius:"5px",
        backgroundColor:colors.textNav,
        gap:"1rem",
        color:colors.nav,

        transition:"background 0.5s, color 0.5s",

        "&:hover": {
            backgroundColor:colors.nav,
            color:colors.white
        },
    },
    itemImage:{
        width:"2.5rem",
        height:"2.5rem",
        borderRadius:"100%",
        border:`solid 2px ${colors.navLight}`,
    },
    itemText:{
        
        textAlign:"center",
    },
    removeButton:{
        width:"17%",
        height:"95%",
    },
});