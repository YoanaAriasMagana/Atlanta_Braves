import React, { useState } from "react";
import * as XLSX from "xlsx";

function Excel() {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table class="table-container">
        <thead>
          <tr>
            <th scope="col">BATTER ID</th>
            <th scope="col">BATTER</th>
            <th scope="col">PITCHER ID</th>
            <th scope="col">PITCHER</th>
            <th scope="col">GAME DATE</th>
            <th scope="col">PLAY OUTCOME</th>
            <th scope="col">VIDEO</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.BATTER_ID}>
              <th>{d.BATTER_ID}</th>
              <td>{d.BATTER}</td>
              <th>{d.PITCHER_ID}</th>
              <td>{d.PITCHER}</td>
              <td>{d.GAME_DATE}</td>
              <td>{d.PLAY_OUTCOME}</td>
              <a href={d.VIDEO_LINK}>{d.VIDEO_LINK}</a>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Excel;