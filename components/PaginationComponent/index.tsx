import iconLeft from "../../public/iconLeft.svg";
import iconRight from "../../public/iconRight.svg";
import Image from "next/image";

interface PROPS {
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
  // eslint-disable-next-line no-unused-vars
  onPageChange: (newPage: number) => void;
}

const PaginationComponent = ({ pagination, onPageChange }: PROPS) => {
  const { page, limit, total } = pagination;
  const totalPage = Math.ceil(total / limit);
  const handlePageChange = (newPage: number) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination-wrapper">
      <button
        className="btn-pre"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <Image src={iconLeft} alt="icon-left" />
      </button>
      <div className="list-page">
        {page}/{totalPage}
      </div>
      <button
        className="btn-next"
        disabled={page >= totalPage}
        onClick={() => handlePageChange(page + 1)}
      >
        <Image src={iconRight} alt="icon-right" />
      </button>
    </div>
  );
};

export default PaginationComponent;
