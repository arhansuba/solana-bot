import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../app/Header/Header';
import { ProgressBar } from '../app/ProgressBar';
import { ThemeProvider } from '../app/Themes/ThemeProvider';
import '../app/styles/index.css';

const HomePage = () => {
  return (
    <ThemeProvider>
      <div className="home-page">
        <Header />
        <main className="main-content">
          <section className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">Welcome to Solana AI Toolkit</h1>
              <p className="hero-subtitle">
                Enhance your Solana development experience with AI-powered tools and insights.
              </p>
              <Link to="/chat" className="cta-button">
                Get Started
              </Link>
            </div>
          </section>
          <section className="features-section">
            <h2 className="section-title">Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3 className="feature-title">AI Code Generation</h3>
                <p className="feature-description">
                  Generate Solana programs effortlessly using AI prompts.
                </p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Context-Aware Blockchain Explorer</h3>
                <p className="feature-description">
                  Understand transactions and accounts with AI-driven insights.
                </p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Development Assistance</h3>
                <p className="feature-description">
                  Get AI suggestions for code improvements and optimizations.
                </p>
              </div>
            </div>
          </section>
          <section className="progress-section">
            <h2 className="section-title">Project Progress</h2>
            <ProgressBar />
          </section>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Solana AI Toolkit. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
