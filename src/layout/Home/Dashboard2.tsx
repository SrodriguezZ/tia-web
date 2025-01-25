import { BasePage } from "../pages/BasePage";
import { Box, Card, Grid } from "@mui/material";
import "../Home/schema/style.css";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../../components/Button";

export const Dashboard2 = () => {
    const navigate = useNavigate();

    return (
        <BasePage>
            <Box sx={{ margin: "5px", height:'100%' }}>
                <Card className="containerNext">
                    <Card sx={{ backgroundColor: "#fafa" }} className="card1">
                        1
                    </Card>
                    <Card className="card2">2</Card>
                    <Card className="card3">3</Card>
                    <Card className="card4">4</Card>
                    <Card className="card5">5</Card>
                    <Card className="card6">6</Card>
                    <Card className="card7">7</Card>
                    <Card className="card8">8</Card>
                </Card>
            </Box>

            <Card sx={{ margin: "5px", height:'100%' }}>
                <Grid className="containernext2">
                    <div className="contenedorNuevo">
                    <div style={{ backgroundColor: "#fafa", border: '1px solid black' , borderRadius:5 }} className="card11" >
                        1
                    </div>
                    <div className="card22" style={{border: '1px solid black', borderRadius:5}}>2</div>
                    <div className="card33" style={{border: '1px solid black', borderRadius:5}}>3</div>
                    <div className="card44" style={{border: '1px solid black', borderRadius:5}}>4</div>
                    <div className="card55" style={{border: '1px solid black', borderRadius:5}}>5</div>
                    <div className="card66" style={{border: '1px solid black', borderRadius:5}}>6</div>
                    <div className="card77" style={{border: '1px solid black', borderRadius:5}}>7</div>
                    <div className="card77" style={{border: '1px solid black', borderRadius:5}}>8</div>
                    </div>
                    
                    <div className="card88" style={{border:'1px solid black'}}>1</div>
                </Grid>

               
            </Card>
            <Card>
                <ButtonComponent text="Ir" onClick={() => navigate("/next3")} />
            </Card>
        </BasePage>
    );
};
