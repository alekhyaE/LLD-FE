import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Accordion from './components/Accordion/Accordion';
import Body from './components/Body';
import Comments from './components/comments/Comments';
import CSP from './components/comments/CSPagination/CSP';
import FEPagination from './components/FEPagination/Pagination';
import Fileexplorer from './components/fileStructure/fileExplorer';
import Search1 from './components/google-search/search1';
import ImageSlider from './components/ImageSlider';
import LiveChat from './components/live-chat/LiveChat';
import Login from './components/Login';
import Pagination from './components/pagination/pagination';
import Progress from './components/progress-bar/progress';
import ProtectedRoute from './components/ProtectedRoute';
import Search from './components/searchui/serach';
import TabForm from './components/TabComponent/TabForm';
import Team from './components/Team';

function App() {
    const [lang,setLang]=useState("en");
  return (
    <div>
        <header class='title'>
        <nav class='title1'>
        <a href="/">Home</a>
        <a href="/about">About!</a>
        <a href="/team">Team</a>
        <a href="/login">Login</a>
        <a href="/imageSlider">Image Slider</a>
        <a href="/accordion">Accordion</a>
        <a href="/comments">Comments</a>
        <a href="/pagination">Pagination</a>
        <a href="/search">Search</a>
        <a href="/chat">Chat</a>
        <a href="/tab">Tab</a>
        <a href="/FEpage">FEpage</a>
        <a href="/search1">Search1</a>
        <a href="/progress">Progress bar</a>
        <a href="/fileexplore">File Explore</a>
        <a href="/csp">CSP</a>
        </nav>
           
        <select value={lang} onChange={(e)=>setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi"> Hindi</option>
            <option value="sp">Spanish</option>
            <option value="ru">Russian</option>
        </select>

        </header>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body/>}></Route>
                <Route element={<ProtectedRoute/>}>
                    <Route path='/about' element={<About lang={lang}/>}></Route>
                    <Route path='/team' element={<Team/>}></Route>
                </Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/imageSlider' element={<ImageSlider/>}></Route>
                <Route path='/accordion' element={<Accordion/>}></Route>
                <Route path='/comments' element={<Comments/>}></Route>
                <Route path='/pagination' element={<Pagination/>}></Route>
                <Route path='/search' element={<Search/>}></Route>
                <Route path='/chat' element={<LiveChat/>}></Route>
                <Route path='/tab' element={<TabForm/>}></Route>
                <Route path='/FEpage' element={<FEPagination/>}></Route>
                <Route path='/search1' element={<Search1/>}></Route>
                <Route path='/progress' element={<Progress/>}></Route>
                <Route path='/fileexplore' element={<Fileexplorer/>}></Route>
                <Route path='/csp' element={<CSP/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
