import FormContainer from "./FormContainer";
import DataTable from "../DataTable";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../api";

export type UrlData = {
  _id: string;
  fullUrl: string;
  shortUrl: string;
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
};

const Container = () => {
  const [data, setData] = useState<UrlData[]>([]);
  const fetchData = async () => {
    const responseBody = await axios.get(`${apiUrl}/shortUrl`);
    setData(responseBody.data);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <> 
    <FormContainer />
    <DataTable data={data} />
  </>
);
};

export default Container;
