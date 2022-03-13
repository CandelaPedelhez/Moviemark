import QRcode from "qrcode"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReceipt } from "../../Actions/index"
import DocuPDF from "./PDF";
import { PDFDownloadLink } from "@react-pdf/renderer";


export default function Receipt() {

    const dispatch = useDispatch();
    const receiptID = useParams();
    const myReceipt = useSelector((state) => state.receipt);
    

    useEffect(() => {
        dispatch(getReceipt(receiptID.id));
    }, [dispatch])

    const [qr, setQr] = useState("");
    useEffect(() => {
        QRcode.toDataURL(myReceipt.id).then((setQr));
    }, [])

    return (
        <div>
            <div>
                <h1>Movie-Mark</h1>
                <p>Adress: 123 Fake Street</p>
                <p>Date: {myReceipt.date}</p>
            </div>
            <div>
                <h3>Description</h3>
                <h3>Price</h3>
            </div>
            <div>
                {
                    myReceipt.movie_title.map(e => <div><li>{e.title}</li> <li>{e.price}</li></div>
                    )
                }
                {
                    myReceipt.adminGroceries.map(e => <div><li>{e.name}</li> <li>{e.price}</li></div>
                    )
                }
            </div>
            <div>
                <h2>Total:</h2>
                <h2>{myReceipt.price}</h2>
            </div>
            <di>
                <img src={qr} />
            </di>
            <div>
                <PDFDownloadLink document={DocuPDF(myReceipt.id)} fileName={"Receipt-" + myReceipt.date + ".pdf"}> {/* CHECKEAR EL DOCUPDF(ID) */}
                    <button>Download PDF</button>
                </PDFDownloadLink>
            </div>

        </div>
    );
}