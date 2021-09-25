/* eslint-disable jsx-a11y/anchor-is-valid */
const Pagination = (props: {
  itemsPerPage: number;
  totalItems: number;
  trigger: Function;
  mainTrigger: Function;
  addition: number;
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i + props.addition);
  }

  const start = pageNumbers[0]; // start page
  const end = pageNumbers[pageNumbers.length - 1]; // end page


  if (pageNumbers.length === 0) {
    return <div></div>
  }

  return (
    <nav className='pag-bar'>
      <ul className="pagination">
        {/** BACK PAGE */}
        {
        start > 1 &&
            <li key={start - 1} className="page-item">
              <a
                onClick={() => props.mainTrigger(-1)}
                href="#"
                className="page-link"
              >
              {start - 1}
              </a>
            </li>
          }
        {/** CURRENT PAGE */}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => props.trigger(number)}
              href="#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
        {/** NEXT PAGE */}
          <li key={end + 1} className="page-item">
            <a
              onClick={() => {props.mainTrigger(1)}}
              href="#"
              className="page-link"
            >
            {end + 1}
            </a>
          </li>
      </ul>
    </nav>
  );
};

export default Pagination;
