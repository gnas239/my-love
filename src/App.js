import { useEffect, useState } from 'react';

import './App.css';
import Music from './assets/audios/music.mp3'
import ImgCouple from "./assets/img/couple.jpg"
import ImgCouple0 from "./assets/img/couple0.jpg"
import ImgCouple1 from "./assets/img/couple1.jpg"
import ImgCouple2 from "./assets/img/couple2.jpg"
import ImgCouple3 from "./assets/img/couple3.jpg"
import ImgMyLove1 from "./assets/img/My-love1.jpg"
import ImgMyLove2 from "./assets/img/My-love2.jpg"
import ImgMyLove3 from "./assets/img/My-love3.jpg"
function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [input, setInput] = useState()
  const handleInput = e=>{
    setInput(e.target.value)
  }
  const handleClick = ()=>{
    if (input ==="0301"){
      setIsLogin(true)
    }else{
      alert("Không phải người iu tui thì đi ra đi má!!!")
    }
  }
  useEffect(()=>{

  },[isLogin])
  if (isLogin) {
  return (
    <div className="my-love">
      <h1 className="my-love-title">CHÚC MỪNG SINH NHẬT NGIU TUI</h1>
      <div className="my-love-title-wrap">
        <img className="my-love-title-img" src={ImgCouple} alt="couple"></img>
        <div className="my-love-title-con">
          <img className="my-love-title-img" src={ImgCouple0} alt="couple"></img>
          <audio className="my-love-title-music" controls autoplay loop>
            <source src ={Music} type="audio/mp3"></source>
          </audio>
        </div>
      </div>
      <div className="my-love-body-wrap">
        <div className="body-title-wrap">
          <h2 className="body-title-header">Lời chúc</h2>
          <p className="body-title-main">Chúc người iu tui sinh nhật zui zẻ, đẹp gái, học tốt, chúc sắp tới thi đượt đỉm cao ẹ!!!<br/>Hôm nay sinh nhật bạn, tui xin tặng bạn món quà sinh nhật quý giá nhất của tui, đó chính là… tui!!! hehe</p>
        </div>
        <img className="body-title-img" src={ImgMyLove2} alt="img"/>
        <img className="body-title-img" src={ImgMyLove1} alt="img"/>
        <img className="body-title-img" src={ImgMyLove3} alt="img"/>
      </div>
      <div className="my-love-footer-wrap">
        <img className="footer-title-img" src={ImgCouple1} alt="img"/>
        <img className="footer-title-img" src={ImgCouple2} alt="img"/>
        <img className="footer-title-img" src={ImgCouple3} alt="img"/>
        <div className="footer-title-wrap">
          <h2 className="footer-title-header">Tâm sự mỏng, dày</h2>
          <p className="footer-title-main">Hiuhiu trong khoảng thời gian hơn 2 tháng iu nhau có đôi lúc tui khum hiểu đượt bạn, chắc là do tui zới bạn chưa chia sẽ đủ nhìu, nhiều lúc nhắn tin còn khum biết nhắn gì. Iu nhau hơn 2 tháng mà tui chưa đượt nghe bạn than thở zề bất cứ zấn đề gì mệt mỏi hay bực bội bạn gặp chắc có lẽ là do bạn là một người mạnh mẽ hoặc là tui chưa hiểu hết bạn để nghe bạn kể lể được. Thui khum sao chắc sau một khoảng thời gian nữa thì chúng ta sẽ hỉu nhau nhiều hơn thui. Iu em!!!</p>
        </div>
      </div>
    </div>
  )} else
  return (
    <div className="App">
     <h1 className="app-title">My Love</h1>
     <div className="form-field">
       <input type="password" className="form-input" placeholder=" "
       onChange={e=>handleInput(e)}></input>
       <label className="form-label">Ngày, Tháng Sinh</label>
     </div>
     <button className="neon-button"
     onClick={handleClick}>Nhấn</button>
    </div>
  );
}

export default App;
