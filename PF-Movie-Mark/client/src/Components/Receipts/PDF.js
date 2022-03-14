import QRcode from "qrcode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReceipt } from "../../Actions/index"
import { Document, Image, Page, Text, View } from "@react-pdf/renderer"


export default function DocuPDF(id) {

    const dispatch = useDispatch();
    const myReceipt = useSelector((state) => state.receipt);

    useEffect(() => {
        dispatch(getReceipt(id));
    }, [dispatch])

    const [qr, setQr] = useState("");
    useEffect(() => {
        QRcode.toDataURL(myReceipt.id).then((setQr));
    }, [])


    return (
        <Document>
            <Page size="A4">
                <View>
                    <View>
                        <Text>Movie-Mark</Text>
                        <Text>Adress: 123 Fake Street</Text>
                        <Text>Date: {myReceipt.date}</Text>
                    </View>
                    <View>
                        <Text>Description</Text>
                        <Text>Price</Text>
                    </View>
                    <View>
                        {
                            myReceipt.movie_title.map(e => <View><Text>{e.title}</Text> <Text>{e.price}</Text></View>
                            )
                        }
                        {
                            myReceipt.adminGroceries.map(e => <View><Text>{e.name}</Text> <Text>{e.price}</Text></View>
                            )
                        }
                    </View>
                    <View>
                        <Text>Total:</Text>
                        <Text>{myReceipt.price}</Text>
                    </View>
                    <View>
                        <Image src={qr} />
                    </View>

                </View>
            </Page>
        </Document>
    );
}