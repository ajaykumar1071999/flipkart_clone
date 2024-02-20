import { useDispatch, useSelector } from 'react-redux';
import { getJsonDataApi } from '../../api';
import './style.css'
import { useEffect } from "react";
import { homeSelector } from '../../redux/slicers/homeslice';
function Home() {
  const { homeList } = useSelector(homeSelector);
  const dispatch = useDispatch();

  const getList = () => {
    getJsonDataApi(dispatch);
  }

  useEffect(() => {
    getList();
  }, [])

  return (
    <>
      <table border={1} height={'200px'} width={"50%"}>
        <thead>
          <tr>
            {
              columns?.map((name) => (
                <th key={name?.id}>{name?.label}</th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {homeList && homeList?.length > 0 ? homeList?.map((item) => (
            <tr key={item?.id}>
              <td>{item?.id}</td>
              <td>{item?.title}</td>
              <td>{item?.body}</td>
            </tr>
          )) : "No record found"}
        </tbody>
      </table>
    </>
  )
}

export default Home


const columns = [
  { name: 'id', label: "Id" },
  { name: 'title', label: 'Title' },
  { name: 'description', label: 'description' }
]