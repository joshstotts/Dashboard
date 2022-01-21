import Sidebar from './Sidebar';
import Reviews from './Reviews';
import AverageRating from './AverageRating';
import SentimentAnalysis from './SentimentAnalysis';
import WebsiteVisitors from './WebsiteVisitors';

function Dashboard() {
    return (
        <div id='dashboard'>
            <Sidebar />
            <Reviews />
            <AverageRating />
            <SentimentAnalysis />
            <WebsiteVisitors />
        </div>
    );
}

export default Dashboard;