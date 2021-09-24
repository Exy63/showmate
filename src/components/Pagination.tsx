/* eslint-disable jsx-a11y/anchor-is-valid */
const Pagination = (props: {
  showsPerPage: number;
  totalShows: number;
  paginate: Function;
  addition: number;
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(props.totalShows / props.showsPerPage); i++) {
    pageNumbers.push(i + props.addition);
  }

  const start = pageNumbers[0]; // start page
  const end = pageNumbers[pageNumbers.length - 1]; // end page

  const backPages = [5, 4, 3, 2, 1];
  const nextPages = [1, 2, 3, 4, 5];

  return (
    <nav>
      <ul className="pagination">
        {/** BACK PAGE */}
        {start > 1 &&
          backPages.map((subtrahend) => (
            <li key={start - subtrahend} className="page-item">
              <a
                onClick={() => props.paginate(start - subtrahend)}
                href="#"
                className="page-link"
              >
                {start - subtrahend}
              </a>
            </li>
          ))}
        {/** CURRENT PAGE */}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => props.paginate(number)}
              href="#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
        {/** NEXT PAGE */}
        {nextPages.map((term) => (
          <li key={end + term} className="page-item">
            <a
              onClick={() => props.paginate(end + term)}
              href="#"
              className="page-link"
            >
              {end + term}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
