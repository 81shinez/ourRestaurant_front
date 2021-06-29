import React, { useState, useEffect } from 'react';
import './App.css';
import customAxios from './customAxios';
import customAxiosGet from './customAxiosGet';

function Test() {
  // IP주소 변수 선언
  const [ip, setIp] = useState('');
  const [time, setTime] = useState('');

  // IP주소 값을 설정합니다.
  function callback(data) {
    setIp(data);
  }

  function callbackTime(data) {
    setTime(data);
  }

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
      // 서버 IP주소를 알아내는 백엔드의 함수를 호출합니다.
      customAxios('/ip', callback);
    }, []
  );

  useEffect(
    () => {
      // 서버 시간을 알아내는 백엔드의 함수를 호출합니다.
      customAxiosGet('/getTestSql', callbackTime);
    }, []
  );

  return (
    <div className="App">
      <header className="App-header">
        이 서버의 IP주소는 {ip}입니다.<br/>
        현재 서버의 시간은 {time}입니다.
      </header>
    </div>
  );
}

export default Test;