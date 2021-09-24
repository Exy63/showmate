/* eslint-disable jsx-a11y/anchor-is-valid */
const Pagination = (props: {
  showsPerPage: number;
  totalShows: number;
  paginate: Function;
  addition: number
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(props.totalShows / props.showsPerPage); i++) {
    pageNumbers.push(i + props.addition);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.length !== 0 && pageNumbers[0] !== 1 && <li key={pageNumbers[0] - 1} className="page-item">
          <a
            onClick={() => props.paginate(pageNumbers[0] - 1)}
            href="#"
            className="page-link"
          >
            {pageNumbers[0] - 1}
          </a>
        </li>}
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
        <li key={pageNumbers[pageNumbers.length - 1] + 1} className="page-item">
          <a
            onClick={() => props.paginate(pageNumbers[pageNumbers.length - 1] + 1)}
            href="#"
            className="page-link"
          >
            {pageNumbers[pageNumbers.length - 1] + 1}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
