import React from "react";
import { Alert } from "reactstrap"

const EraseUser = () => {
  return (
    <div>
      <Alert color="danger" style={{display: "block"}}><span className="fw-bold text-black">¿Está seguro de querer borrar su cuenta?</span></Alert>
    </div>
  );
};

export default EraseUser;
