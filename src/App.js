import Header from "./components/Header";
import FeedBackItem from "./components/feedbackItem";

function App(){
    return (
        <>
            <Header/>
            <div className="container">
               <FeedBackItem/>
            </div>
        </>
    );
}
export default App;