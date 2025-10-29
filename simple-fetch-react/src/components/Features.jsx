import { useEffect, useMemo, useState } from 'react';
import '../App.css';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

function Features({ data }) {

  const DATA_LIMIT = 10;
  const res = data.data;
  const size = res.length;
  const totalPages = Math.max(1, Math.ceil(size / DATA_LIMIT));

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) *   DATA_LIMIT;
    return res.slice(start, start + DATA_LIMIT);
  }, [res, currentPage]);

  function gotoPage(page) {
    setCurrentPage(page);
  }

  return (
    <div className="features-container">
      <h2>Internet Users by Country</h2>
      <h3>Total Records: {size}</h3>

      {size === 0 ? (
        <p>No records available.</p>
      ) : (
        <>
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Country</th>
                <th>Internet Users</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {paginatedItems.map((item, index) => (
                <tr key={index}>
                  <td>{(currentPage - 1) * DATA_LIMIT + index + 1}</td>
                  <td>{item.country}</td>
                  <td>{item.internet_users_cia}</td>
                  <td>{item.cia_data_year}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button onClick={() => gotoPage(1)} disabled={currentPage === 1}>
              <ChevronsLeft size={20} />
            </button>
            <button onClick={() => gotoPage(currentPage - 1)} disabled={currentPage === 1}>
              <ChevronLeft size={20} />
            </button>

            <p>{currentPage}</p>

            <button onClick={() => gotoPage(currentPage + 1)} disabled={currentPage === totalPages}>
              <ChevronRight size={20} />
            </button>
            <button onClick={() => gotoPage(totalPages)} disabled={currentPage === totalPages}>
              <ChevronsRight size={20} />
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default Features;