import { useState } from 'react';
import { BarChart, User, PieChart, LineChart } from 'lucide-react';
import { UilTemperatureEmpty } from '@iconscout/react-unicons'
import './Dashboard.css'
import NavBar from '../Navbar/Navbar';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../Profile/Profile';

const Dashboard = () => {
  const [sidebarPosition, setSidebarPosition] = useState('left');
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const cardData = [
    { title: 'pH', value: '', icon: BarChart },
    { title: 'Turbidity', value: '', icon: User },
    { title: 'Temperature', value: '36.2', icon: UilTemperatureEmpty },
    { title: 'Water Level', value: '', icon: LineChart },
  ];

  const handleCardClick = () => {
    setShowSidebar(true);
    setShowProfile(false);
    setSidebarPosition(prev => prev === 'left' ? 'right' : 'left');
  };

  const handleProfileClick = () => {
    setShowProfile(true);
    setShowSidebar(false);
    setSidebarPosition(false);
  };
  const toggleSidebar = () => {
    setSidebarPosition(prev => {
      if (prev === 'hidden') return 'left';
      if (prev === 'left') return 'right';
      return 'left';
    });
    setShowProfile(false);
  };

  return (
    <div className="gran">
      <NavBar onProfileClick={handleProfileClick} />
      <div className="car">
        <div className='cartes'>
          {cardData.map((card, index) => (
            <Card key={index} {...card} onClick={handleCardClick} />
          ))}
        </div>
        {showSidebar && (
          <Sidebar 
            position={sidebarPosition} 
            icons={cardData.map(card => card.icon)} 
          />
        )}
        {showProfile && (
          <div className="fixed top-16 left-0 w-1/2 h-full p-4">
            <Profile />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;