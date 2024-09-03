import {useState} from "react";
import './App.css'
import './components/Post.jsx'
import PostList from "./components/PostList.jsx"
import MainHeader from "./components/MainHeader.jsx";

function App() {

    const [visibleModal, setVisibleModal] = useState(false);
    function showModal(event){
        setVisibleModal(true);
    }
    function hideModal(event){
        setVisibleModal(false);
    }

    return <main>
        <MainHeader onCreatePost={showModal}/>
        <PostList visibility={visibleModal} changeVisibility={hideModal}/>
    </main>

}

export default App
