import logo from './logo.svg';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
//import 'react-tabs/style/react-tabs.css';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import {StartPage} from "./pages/homePage";
import {GamingView} from "./pages/gamingView";
import {FooterDiv} from "./components/footer";
import "./services/firestore";
import {CollectionView} from "./pages/collectionView";
import {PostCreator} from "./pages/PostCreator";
import React from "react";
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {
  const [defaultTab, setDefaultTab] = useLocalStorage("defaultTabIndex",0);

  return (<>
        <Tabs defaultIndex={defaultTab} onSelect={(index) => setDefaultTab(index)} className={'bg-dark text-light overflow-hidden'}>
          <TabList className={'navbar navbar-expand-lg bg-dark'}>
            <div className={'container-fluid'}>
              <button className={"navbar-toggler text-light"} type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Tab className={'nav-link nav-item text-light'}>Home</Tab>
                  <Tab id={'gamingbutton'} className={'nav-link nav-item text-light'}>Gaming</Tab>
                  <Tab id={'collectionbutton'} className={'nav-link nav-item text-light'}>Collecting</Tab>
                  <Tab className={'nav-link nav-item text-light'}>Create Post</Tab>
                </ul>
              </div>
            </div>
          </TabList>
          <TabPanel>
            <StartPage></StartPage>
          </TabPanel>
          <TabPanel>
            <GamingView></GamingView>
          </TabPanel>
          <TabPanel>
            <CollectionView></CollectionView>
          </TabPanel>
          <TabPanel>
            <PostCreator></PostCreator>
          </TabPanel>
        </Tabs>
        <FooterDiv></FooterDiv>
      </>
  );
}

export default App;