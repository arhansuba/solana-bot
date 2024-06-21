import React from 'react';
import Header from '../Header/Header';
import { ThemeProvider } from '../Themes/ThemeProvider';
import Chat from '../components/Chat/Chat';
import './index.scss';

const SitePage: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="site-container">
        <Header />
        <main className="site-main">
          <Chat />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default SitePage;
