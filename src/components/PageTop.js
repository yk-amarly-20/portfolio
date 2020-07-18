import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// ナビゲーションバーの実装
const NavBar = () => {
  const [colorGradient, setColorGradient] = useState(0);
  
  /*
  スクロールの現在位置を取得
  **/
  const scrollTop = () => {
    return Math.max(
      document.body.scrollTop,
      window.pageYOffset,
      document.documentElement.scrollTop
    );
  };

  /*
  スクロールによってナビゲーションバーの色を徐々に変更
 **/
  const onScroll = () => {
    const position = scrollTop();
    const threshold = 200;
    if (position >= threshold) {
      setColorGradient(1);
    } else {
      setColorGradient(position / threshold);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  });

  const colorR = String(126 - 100 * colorGradient);
  const colorG = String(123 - 92 * colorGradient);
  const colorB = String(215 - 100 * colorGradient);
  const colorA = String(0.2 + 0.8 * colorGradient);
  const scrollStyle = {
    backgroundColor: "rgba(" + colorR + "," + colorG + "," + colorB + "," + colorA + ")"
  }

  return (
    <header style={scrollStyle}>
      <ul className="nav">
        <li><Link to="/" className="nav-text">About</Link></li>
        <li><Link to="/Skills" className="nav-text">Skills</Link></li>
        <li><Link to="/Works" className="nav-text">Works</Link></li>
      </ul>
    </header>
  );
};


/*
トップカードを実装
名前、職
*/
const Top = () => {
  return (
    <div className="card-parent" id="top-view">
      <div className="card-children">
        <div className="my-name">
          Yuto Kojima's Portfolio
        </div>
        <div className="job">
          Web App and Machine Learning Engineer
        </div>
      </div>
    </div>
  )
}

export default function PageTop() {
  return (
    <div id="top-view">
      <NavBar />
      <Top />
    </div>
  )
}
