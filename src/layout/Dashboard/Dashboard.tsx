import { BasePage } from "../pages/BasePage";
import dash1  from '../../assets/img/IconDash1.png'
import { Card } from "@mui/material";

export const Dashboard = () => {
    return (
        <BasePage>
            <Card className="dashboardStyle">
              <img src={dash1} width={900} height={500}/>  
            </Card>
        </BasePage>
    );
};
