import './Dashboard.css';
import AnalyticsCard from "./Card";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PeopleIcon from '@material-ui/icons/People';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';


function Dashboard() {
    return (
        <div className="dashboard">
            
            <div className="dashboard__top">
                <AnalyticsCard 
                    title = "CANDIDATES" 
                    myc ="#C10707" 
                    value={0} 
                    iconcolor = "#8D0000"
                    bgTextcolor = "#8D0000" 
                    Icon={
                        <PeopleIcon 
                            className="cards" 
                            style={{ fontSize: 110 }}/>} />
                
                <AnalyticsCard 
                    title = "VOTERS" 
                    myc="#FDF300" 
                    value={0} 
                    iconcolor = "#D1C900"
                    bgTextcolor = "#D1C900"
                    Icon={
                        <ThumbUpIcon 
                            className="cards" 
                            style={{ fontSize: 110 }}/>}/>
                
                <AnalyticsCard 
                    title = "VOTES CAST" 
                    myc ="#4989E9" 
                    value={0}
                    iconcolor = "#3868B0"
                    bgTextcolor = "#3868B0"
                    Icon={
                        <ChromeReaderModeIcon 
                            className="cards" 
                            style={{ fontSize: 110 }}/>}/>
                
                
            </div>
            <div className = "row__back">
            <h1>POSITIONS</h1>
            <div className="dashboard__row">
            
                <AnalyticsCard 
                    title = "PROGRESS" 
                    myc ="#0BCF07" 
                    value={"0%"}
                    iconcolor = "#049301"
                    bgTextcolor = "#049301" 
                    Icon={
                        <BarChartIcon 
                            className="bar" 
                            style={{ fontSize: 140 }}/>}/>
                <AnalyticsCard 
                    title = "PROGRESS" 
                    myc ="#F8A911" 
                    value={"0%"} 
                    iconcolor = "#B27B10"
                    bgTextcolor = "#B27B10"
                    Icon={
                        <PieChartIcon 
                            className="pie" 
                            style={{ fontSize: 140 }}/>}/>
                
            </div >
</div>
            
         
        </div>
    )
}

export default Dashboard
