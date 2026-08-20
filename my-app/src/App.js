import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';

const members = [
  { id: 1, name: 'เตชธร โง้วธนารมย์', nickname: 'ซูม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'มด'] },
  { id: 2, name: 'ณัฏฐ์ ณ นคร', nickname: 'ณัฏฐ์',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะลิ', 'แมงมุม'] },
  { id: 3, name: 'ชวัลวิทย์ ทองทรง', nickname: 'เนส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'ตะขาบ'] },
    
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];


function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
