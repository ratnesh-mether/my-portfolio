import resume from '/Users/ratnesh/React Projects/my-portfolio/src/assets/Frontend.pdf';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PdfViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        // <iframe src={resume} width="100%" height="100%" title="resume" />
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={resume}
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </Worker>
    );
}

export default PdfViewer;
