
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Space } from 'antd';
 
import Headder from "./components/Headder";
import Footer from "./components/Footer";
import { useRouter } from "next/router";

export default function Cut() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();



  useEffect(() => {
    axios.get("https://node-api-u9ix.onrender.com/getcash")
      .then(response => {
        const results = response.data.results;
        console.log(results);
        setData(results);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: 'รายการ',
      dataIndex: 'list',
      key: 'list',
    },
    {
      title: 'จำนวนเงิน',
      dataIndex: 'cash',
      key: 'cash',
    },
    
  ];

  const isDataSmall = data.length < 5;

  return (
    <div className="h-auto bg-[#f2f3f5]">
      <Headder />
      <div className="flex justify-center items-center">
        <div className={`w-[1300px] max-[540px]:w-[360px] bg-white mt-4 rounded-lg p-4 ${isDataSmall ? 'h-[600px]' : 'h-auto'}`}>
          <h1 className="text-3xl font-bold mb-4">รายการธุรกรรม</h1>
          {loading ? (
            <div className="text-center">
              Loading...
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table columns={columns} dataSource={data} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
