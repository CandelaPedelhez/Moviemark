/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import ReceiptsCard from "./ReceiptsCard";
import { getMyReceipts } from "../../Actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./MyReceipts.module.scss";

export default function MyReceipts() {
  const dispatch = useDispatch();

  const receipts = useSelector((state) => state.receipts);

  useEffect(() => {
    dispatch(getMyReceipts());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button className={styles.buttonreceipt}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <div>
        {receipts.summary ? (
          <div>
            {receipts.summary.map((e, index) => (
              <div key={index}>
                <ReceiptsCard
                  price={e.transaction_amount}
                  status={e.status}
                  payment={e.payment_type_id}
                  items={e.additional_info}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1>You don't have any tickets yet, try buying something ;)</h1>
          </div>
        )}
      </div>
    </div>
  );
}
