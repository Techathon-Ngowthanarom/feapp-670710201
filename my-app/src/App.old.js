import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';
import Button from './components/Button';
import Navbar from './components/Navbar';

// const members = [
//   {
//     id: 1, name: 'เตชธร โง้วธนารมย์', nickname: 'ซูม',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'มด']
//   },
//   {
//     id: 2, name: 'ณัฏฐ์ ณ นคร', nickname: 'ณัฏฐ์',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะลิ', 'แมงมุม']
//   },
//   {
//     id: 3, name: 'ชวัลวิทย์ ทองทรง', nickname: 'เนส',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'ตะขาบ']
//   },

//   // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
// ];


// function App() {
//   return (
//     <div className="container">
//       <h1>สมาชิกกลุ่มของเรา</h1>
//       <div className="card-row">
//         {members.map((m) => (
//           <ProfileCard
//             key={m.id}
//             name={m.name}
//             nickname={m.nickname}
//             major={m.major}
//             favorites={m.favorites}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

const movies = [
  { id: 1, title: 'Interstellar', genre: 'Sci-Fi',    year: 2014 },
  { id: 2, title: 'Your Name',    genre: 'Animation', year: 2016 },
  { id: 3, title: 'Parasite',     genre: 'Thriller',  year: 2019 },
];

function App() {
  return (
    <div>
      {/* ...การ์ดทั้งหลาย...
      <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
        <span className="text-xl font-bold text-white">🎬 MovieHub</span>
        <div className="flex gap-6 text-slate-300">
          <a href="#">หน้าแรก</a>
          <a href="#">หนังใหม่</a>
          <a href="#">รายการโปรด</a>
        </div>
      </nav> */}
      <Navbar />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">


        <div className="grid grid-cols-4 gap-6 p-6">
          <div className="rounded-xl bg-white p-4 shadow">การ์ด 1</div>
          <div className="rounded-xl bg-white p-4 shadow">การ์ด 2</div>
          <div className="rounded-xl bg-white p-4 shadow">การ์ด 3</div>
          <div className="rounded-xl bg-white p-4 shadow">การ์ด 4</div>
        </div>

        <div className="bg-slate-100 text-center rounded-full w-full py-6">
          <h1 className="text-4xl font-bold text-slate-800">MovieHub</h1>
          <p className="text-lg text-slate-500">รวมหนังดีที่คุณห้ามพลาด</p>
          <p className="text-sm uppercase text-cyan-600 font-semibold">since 2026</p>
        </div>

        <div className="max-w-sm mx-auto mt-10 rounded-2xl border border-slate-200
                bg-white p-6 shadow-lg">
          <h2 className="text-xl font-bold text-slate-800">Interstellar</h2>
          <p className="mt-2 text-slate-500">การเดินทางข้ามกาแล็กซีเพื่อหาบ้านใหม่ให้มนุษยชาติ</p>
          <span className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1
                   text-sm font-semibold text-cyan-700">Sci-Fi</span>
        </div>
      </div>
      <div className="flex gap-3 p-6">
        <Button>บันทึก</Button>
        <Button variant="danger">ลบ</Button>
        <Button variant="ghost">ยกเลิก</Button>
      </div>
      <Footer />
    </div>


  );
}

export default App;
