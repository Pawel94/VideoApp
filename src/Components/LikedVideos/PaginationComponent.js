import React from "react";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
const PaginationComponent = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div class="d-flex justify-content-end">
      <Pagination aria-label="Page navigation example">
        {pageNumbers.map((number) => (
          <PaginationItem key={number} className="page-item">
            <PaginationLink
              onClick={() => paginate(number)}
              href="!#"
              className="page-link"
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
    </div>
  );
};
export default PaginationComponent;
