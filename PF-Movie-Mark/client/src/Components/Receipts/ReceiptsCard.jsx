import QRcode from "qrcode";
import React from "react";
import { useEffect, useState } from "react";
import styles from "./ReceiptCard.module.scss";

export default function ReceiptsCard({ price, status, items, payment }) {
  const [qr, setQr] = useState("");

  useEffect(() => {
    QRcode.toDataURL(text).then((data) => {
      setQr(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let array = items.map((e) => e.quantity + " " + e.title);
  let sinStatus = array.join(", ");
  let text = sinStatus + " - PAYMENT: " + status.toUpperCase();

  return (
    <div className={styles.receipt}>
      <h3 className={styles.h33}>Receipt:</h3>
      <div className={styles.container_receipt}>
        {items ? (
          items.map((e) => (
            <div>
              <p>Product: {e.title}</p>
              <p>Quantity: {e.quantity}</p>
              <p>Price: {e.unit_price}</p>
            </div>
          ))
        ) : (
          <div></div>
        )}

        <p>Payment: {payment}</p>
        <p>Status: {status}</p>
        <p>Total price: {price}</p>
      </div>
      <div>
        <img style={{ width: "200px" }} src={qr} alt="img not found" />
      </div>
    </div>
  );
}
