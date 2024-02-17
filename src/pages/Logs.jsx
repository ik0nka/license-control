import React, { useState, useEffect } from 'react';
import '../styles/Logs.scss';

function Logs(props) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/logs`);
      if (!response.ok) {
        throw new Error('Ошибка при получении логов');
      }
      const data = await response.json();
      setLogs(data);
    } catch (error) {
      alert(error.message);
    }
  };

  let output = getCurrentDateTime();

  return (
    <div className="logs-container">
      <div className="logs-console">
        <table>
          <tbody>
            {console.log(output)}
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{output}</td>
                <td>{log.ip}</td>
                <td>{log.key}</td>
                <td>{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  function getCurrentDateTime() {
    const now = new Date();
    const date = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const output = `[${date}.${month} ${hours}:${minutes}]`;
    return output;
  }
}

export default Logs;
