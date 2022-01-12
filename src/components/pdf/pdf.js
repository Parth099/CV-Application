import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import font from "./font/Nunito-Regular.ttf";
import fontLight from "./font/Nunito-ExtraLight.ttf";

// Create styles
Font.register({
    family: "Nunito",
    fonts: [
        { src: font, fontWeight: 400 },
        { src: fontLight, fontWeight: 200 },
    ],
});
console.log("Hi from PDF");
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FFF",
        fontFamily: "Nunito",
        padding: "75px",
        fontWeight: 400,
    },
    PD: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    name: {
        textAlign: "center",
        width: "100%",
        borderRight: "1px black solid",
        fontWeight: "bold",
        fontSize: "16px",
    },
    smtxt: {
        fontSize: "6px",
    },
    PDflexCol: {
        marginLeft: "5px",
        display: "flex",
        flexDirection: "column",
        fontSize: "9px",
        fontWeight: 200,
    },
});

const getPersonalDataView = (PD) => {
    return (
        <View style={styles.PD}>
            <Text style={styles.name}>
                {`${PD["First Name"]} ${PD["Last Name"]}`}
                <View style={{ paddingTop: "5px" }}>
                    <Text style={styles.smtxt}> {PD.Title}</Text>
                </View>
            </Text>
            <View style={styles.PDflexCol}>
                <Text>{PD.Email}</Text>
                <Text>{PD.phoneNum}</Text>
                <Text>{PD.cityState}</Text>
            </View>
        </View>
    );
};

// Create Document Component
const MyDocument = (props) => {
    const { info } = props;
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {getPersonalDataView(info.personalData)}
            </Page>
        </Document>
    );
};

const generatePDFDocument = async (info) => {
    console.log(info);
    const blob = await pdf(<MyDocument info={info} />).toBlob();
    saveAs(blob, "cv.pdf");
};

export default generatePDFDocument;
