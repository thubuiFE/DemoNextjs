/* eslint-disable @typescript-eslint/no-explicit-any */
// libs
import Link from "next/link";
// apis
import { deleteProduct } from "@/apis/deleteProduct";

const ListButton = ({ id }: { id: string }) => {
  const handleDeleteSuccess = (res: any) => {
    if (res?.success) {
      alert("Delete success");
    }
  };

  const handleDelete = async () => {
    deleteProduct({
      id_product: id,
      handleSuccess: (res: any) => handleDeleteSuccess(res),
    });
  };

  return (
    <div className="list-button-wrapper" style={{ marginLeft: "auto" }}>
      <button className="btn-edit" style={{ marginRight: "10px" }}>
        <Link href={`/detail/${id}`}>Detail</Link>
      </button>
      <button className="btn-edit" style={{ marginRight: "10px" }}>
        <Link href={`/edit/${id}`}>Edit</Link>
      </button>
      <button className="btn-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default ListButton;
