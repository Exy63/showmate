/* eslint-disable jsx-a11y/anchor-is-valid */
const Pagination = (props: {
  showsPerPage: number;
  totalShows: number;
  paginate: Function;
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(props.totalShows / props.showsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pag-bar">
      <ul className="pagination ">
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
      </ul>
    </nav>
  );
};

export default Pagination;
