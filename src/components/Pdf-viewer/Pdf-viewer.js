import resume from '/Users/ratnesh/React Projects/my-portfolio/src/assets/Frontend.pdf';


function PdfViewer() {
    return (
        <iframe src={resume} width="100%" height="100%" title="resume" />
    );
}

export default PdfViewer;
