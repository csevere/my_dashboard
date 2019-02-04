//starting with one main component DashBoard
import React from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from './AsyncComponent';

const DashBoard = asyncComponent(()=> 
  import ('./Components/DashBoardContainer').then(module => module.default)
)


const PrimaryLayout = () => (
    <div className="primary-layout">
      <main>
        <Route path="/" exact component={DashBoard} />
      </main>
    </div>
  );

  export default PrimaryLayout; 