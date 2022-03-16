import React from "react";
import DocuPDF from "./PDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function Card({ date , id}) {

    return (
        <div>
            <h3>Date: {date}</h3>
            <img src= "https://media.istockphoto.com/vectors/invoice-line-icon-editable-stroke-pixel-perfect-for-mobile-and-web-vector-id1172476736?k=20&m=1172476736&s=170667a&w=0&h=lnf4CteTcPEkCXuJsUgY3dwl75uljCaQgr29CYCu8IA=" />
            <PDFDownloadLink document={DocuPDF(id)} fileName={"Receipt-" + {date} + ".pdf"}> {/* CHECKEAR EL DOCUPDF(ID) */}
            <button>Download PDF</button>
            </PDFDownloadLink>
            
        </div>
    )
}