import React, { useState } from "react";
import { Alert } from "reactstrap";

const AlertExample = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
      El debe y el haber no cuadra
    </Alert>
  );
};

export default AlertExample;
