import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import { Document, Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";

import img from "./black-dot.png";
import font from "./font/Nunito-Regular.ttf";
import fontLight from "./font/Nunito-ExtraLight.ttf";
import fontBold from "./font/Nunito-ExtraBold.ttf";
import fontSemiBold from "./font/Nunito-Bold.ttf";

// Create styles
Font.register({
    family: "Nunito",
    fonts: [
        { src: fontLight, fontWeight: 200 },
        { src: font, fontWeight: 400 },
        { src: fontSemiBold, fontWeight: 600 },
        { src: fontBold, fontWeight: 800 },
    ],
});
console.log("Hi from PDF");
const styles = StyleSheet.create({
    page: {
        margin: "0px",
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
        padding: "1px",
        display: "flex",
        flexDirection: "column",
        fontSize: "9px",
        fontWeight: 400,
    },
    secTitle: {
        marginTop: "3px",
        fontWeight: 800,
        borderBottom: "1.75px solid black",
        fontSize: "12px",
        marginBottom: "2px",
    },
    light: {
        fontWeight: 400,
    },
    bold: {
        fontWeight: 600,
    },
    dataContainer: {
        fontSize: "10px",
    },
    splitFlex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    mimicList: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "15px",
    },
    bullet: {
        width: "3px",
        height: "3px",
        marginRight: "8px",
        margin: 0,
    },
    detail: { paddingLeft: "3px" },
    centerImg: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    borderBtm: { borderTop: "0.5px solid black", marginTop: "3px", marginBottom: "2px" },
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
const genBullets = (details) => {
    return (
        <View>
            {[...details].map((detail) => (
                <View>
                    <View key={detail.uuid} style={styles.mimicList}>
                        <View style={styles.centerImg}>
                            <Image src={img} style={styles.bullet}></Image>
                        </View>
                        <Text style={styles.detail}>{detail.val}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};
const getEduView = (edu) => {
    const len = edu.length - 1;
    return (
        <View>
            {edu.length > 0 && <Text style={styles.secTitle}>Education</Text>}
            {[...edu].map((eduFrame, idx) => (
                <View key={eduFrame.uuid} style={styles.dataContainer}>
                    <View style={styles.splitFlex}>
                        <Text style={styles.bold}>
                            {eduFrame["Institute Name"]}
                            <Text style={styles.light}>, {eduFrame.Location}</Text>
                        </Text>
                        <Text>{`${eduFrame["Date From"]}-${eduFrame["Date To"]}`}</Text>
                    </View>
                    <Text>{eduFrame.Degree}</Text>
                    {eduFrame.GPA && <Text>Cumulative GPA: {eduFrame.GPA}</Text>}
                    {genBullets(eduFrame.details)}
                    {idx != len && <View style={styles.borderBtm}></View>}
                </View>
            ))}
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
                {getEduView(info.education)}
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
