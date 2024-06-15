import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);
  const [searchTerm , setsearchTerm] = useState('')
  const [currentpage, setCurrentpage] = useState(1);

  // search

  const filterData = data.filter
  (user => user.firstname.toLowerCase().includes(searchTerm.toLowerCase())||
  user.lastname.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const recordPerpage = 3;
  const LastIndex = currentpage * recordPerpage;
  const FirstIndex = LastIndex - recordPerpage;
  const records = filterData.slice(FirstIndex, LastIndex);
  const npage = Math.ceil(filterData.length/ recordPerpage);
  const numbers = [...Array(npage + 1).keys()].slice();

  // const loadUser = async () => {
  //   try {
  //     const res = await axios.get('http://localhost:3001/user');
  //     setData(res.data);ta
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const loadUser = () => {
      axios.get('http://localhost:3001/user')
        .then((response) => {
          setData(response.data,"Response");
        })
        .catch((err) => {
          console.log(err,'eeeeeeeeeee');
        });
    };

  useEffect(() => {
    loadUser();
  }, []);

  // const onDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/user/${id}`);
  //     loadUser();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const onDelete = (id) => {
    axios.delete(`http://localhost:3001/user/${id}`)
      .then((res) => {
        loadUser();
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  };

  const perPage = () => {
    if (currentpage !== 1) {
      setCurrentpage(currentpage - 1);
    }
  };

  const changepage = (id) => {
    setCurrentpage(id);
  };

  const nextpage = () => {
    if (currentpage !== npage) {
      setCurrentpage(currentpage + 1);
    }
  };

  return (
    <>
      <section className="w-full">
        <div className="mt-6 flex flex-col">
          <div className="overflow-x-auto">
          <div className="flex justify-end pe-3">
              <input
                className="flex h-12 w-[300px] rounded-md bg-gray-100 px-5 py-2 mb-4 me-5 mt-5 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 "
                type="text"
                placeholder="Serach"
                onChange={(e) => setsearchTerm(e.target.value)}
              ></input>
          </div>
            <div className='px-8'>
              <button
                type="button"
                className="rounded-md float-end bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <Link to="/create">        
                  Add new Student
                </Link>
              </button>
            </div>
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th scope="col" className="text-sm">Id</th>
                      <th scope="col" className="text-sm"><span>First Name</span></th>
                      <th scope="col" className="text-sm">Last Name</th>
                      <th scope="col" className="text-sm">Age</th>
                      <th scope="col" className="text-sm">City</th>
                      <th scope="col" className="text-sm"><span>Edit</span></th>
                      <th scope="col" className="text-sm py-3.5"><span>Delete</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {records.map((value, index) => (
                      <tr key={value.id} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="text-sm text-gray-900">{index + 1}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex justify-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{value.firstname}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{value.lastname}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">{value.age}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">{value.city}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-900">
                          <Link to={`/edit/${value.id}`}>
                            <button className='border ps-5 pe-5 pt-1 pb-1 rounded-md bg-green-600 font-semibold'>Edit</button>
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-900">
                          <button className='border ps-3 pe-3 pt-1 pb-1 rounded-md bg-red-600 fton-semibold' onClick={() => onDelete(value.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
          onClick={perPage}
        >
          ← Previous
        </a>
        <div className="flex items-center">
          {numbers.map((n, i) => (
            <a
              href="#"
              key={i}
              className={`page-items ${currentpage === n ? 'active' : ''} mx-1 rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105`}
              onClick={() => changepage(n)}
            >
              {n}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="mx-2 text-sm font-semibold text-gray-900"
          onClick={nextpage}
        >
          Next →
        </a>
      </div>
    </>
  );
}

