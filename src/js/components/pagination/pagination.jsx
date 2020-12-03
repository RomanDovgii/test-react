import React from "react";

const Pagination = () => {
  return (
    <ul className="pagination">
      <li className="pagination__item"><a href="#" className="pagination__link">&lt;&lt;</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">&lt;</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">1</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">2</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">3</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">4</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">5</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">...</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">56</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">57</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">58</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">59</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">60</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">&gt;</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">&gt;&gt;</a></li>
    </ul>
  );
};

export default Pagination;
