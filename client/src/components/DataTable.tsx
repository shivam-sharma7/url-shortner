import { UrlData } from "../components/Container/Container";

type DataTable = {
  data: UrlData[];
};

const DataTable = ({ data }: DataTable) => {
   const renderTableData = () => {
      return data.map((item) => {
        return (
            <tr key={item._id} 
              className="border-b text-white bg-gray-600 hover:bg-blue-800 hover:text-gray-7000 ">
               <td className="px-6 py-3 break-words">
                <a href={item.fullUrl } target="blank">{item.fullUrl}</a>
                </td>
                <td className="px-6 py-3 break-words">
                <a href={item.shortUrl } target="blank">{item.shortUrl}</a>
                </td> 
                <td className="px-6 py-3 break-words">
                <a href={item.clicks.toString() } target="blank">{item.clicks}</a>
                </td> 
                <td className="px-6 py-3 break-words">
                  {/* TODO: Add Action Buttons */}
                </td>  
            </tr>
        )
      })
   }

    return (
      <div className="container mx-auto pt-2 pb-2">
        <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
          <table className="w-full table-fixed text-sm text-left rtl:text-right ">
            <thead className="text-md uppercase">
              <tr>
                <th scope="col" className="px-6 py-3 w-6/12">
                  FullUrl
                </th>
                <th scope="col" className="px-6 py-3 w-6/12">
                  ShortUrl
                </th>
                <th scope="col" className="px-6 py-3 w-6/12">
                  Clicks
                </th>
                <th scope="col" className="px-6 py-3 w-6/12">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>   
            {renderTableData()} 
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default DataTable