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
  const [reload, setReload] = useState<boolean>(false);

  const updateReloadState = () : void => {
    setReload(!reload);
  };

  const fetchData = async () => {
    const responseBody = await axios.get(`${apiUrl}/shortUrl`);
    setData(responseBody.data);
    
  };

  useEffect(() => {
    fetchData();
  }, [reload]);

  return (
    <> 
    <FormContainer />
    <DataTable data={data} updateReloadState={updateReloadState} />
  </>
);
};

export default Container;
