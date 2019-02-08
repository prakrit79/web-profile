import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
// The workerSrc property shall be specified.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
   
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className = "pdf-viewer">
        <Document 
          file="https://dl.dropbox.com/s/hby4kp645igegso/Resume.pdf?dl=0" onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
          <Page pageNumber={2} />
        </Document>
      </div>
    );
  }
}

export default Resume;