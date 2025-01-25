import BasePage from "../pages/BasePage";

import { Box, Card } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./schema/style.css"
import { ButtonComponent } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <BasePage>
        <Box sx={{margin:'20px'}}>
        <Card
            className="containerCard"
            >
                <img  className="img-card" src="https://img2.rtve.es/i/?w=1600&i=1442912664626.jpg"/>
                <img className="img-card"  src="https://img2.rtve.es/i/?w=1600&i=1442912664626.jpg"/>
                <img className="img-card"  src="https://img2.rtve.es/i/?w=1600&i=1442912664626.jpg"/>
                <img className="img-card"  src="https://img2.rtve.es/i/?w=1600&i=1442912664626.jpg"/>
                <img className="img-card"  src="https://img2.rtve.es/i/?w=1600&i=1442912664626.jpg"/>
                <img className="img-card"  src="https://img2.rtve.es/i/?w=1600&i=1442912664626.jpg"/>
            </Card>
        </Box>
        <Card >
            <ButtonComponent text="Ir" onClick={()=> navigate("/next")} />
        </Card>
        <Card >
            <ButtonComponent text="Ir" onClick={()=> navigate("/next")} />
        </Card>
        <Card >
            <ButtonComponent text="Ir" onClick={()=> navigate("/next")} />
        </Card>
        <Card >
            <ButtonComponent text="Ir" onClick={()=> navigate("/next")} />
        </Card>

        <Card >
            <ButtonComponent text="Ir" onClick={()=> navigate("/next")} />
        </Card>
        <Card >
            <ButtonComponent text="Ir" onClick={()=> navigate("/next")} />
        </Card>
        <Card >
            <ButtonComponent text="Ir" onClick={()=> navigate("/next")} />
        </Card>
        </BasePage>
    );
};
