import { Button, Dialog, DialogContent, DialogTitle, LinearProgress, Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import * as React from 'react';
import UploadedFile from '../model/uploaded-file';

interface FileUploadProps {
    open: boolean;
    url: string;
    onClose: () => void;
}

interface FileUploadState {
    over: boolean;
    files: Array<UploadedFile>;
}

class FileUpload extends React.Component<FileUploadProps, FileUploadState>{

    constructor(props: FileUploadProps) {
        super(props)
        this.state = {
            over: false,
            files: [],
        }
    }

    render() {
        let color = this.state.over ? "#000" : "#aaa";
        return (<Dialog open={this.props.open} fullWidth={false} onClose={() => this.props.onClose()}
            onDrop={(e) => this.drop(e)}
            onDragOver={(e) => { e.preventDefault(); this.setState({ over: true }) }}
            onDragLeave={(e) => { e.preventDefault(); this.setState({ over: false }) }}
        >
            <DialogTitle>
                Upload Files
                <br />
                <Typography variant="caption">Drag files to upload and drop them on the circle or click on the upload files button.</Typography>
            </DialogTitle>
            <DialogContent>
                <div style={{ display: "flex", marginBottom: "20px" }}>
                    <div style={{ flex: 1, textAlign: "center" }}>
                        <div style={{ display: "inline-block", border: "1px dashed " + color, borderRadius: "100%", width: "150px", height: "150px" }}>
                            <CloudUploadIcon style={{ fontSize: "60px", marginTop: "40px", color: color }} />
                        </div>
                        <Button variant="contained" component="label" size="small" color="primary" style={{ marginTop: "20px" }}>
                            Upload File
                        <input multiple accept=".csv" onChange={(e) => this.inputFile(e)} style={{ display: "none" }} type="file" id="file-uploader" name="file-uploader" />
                        </Button>

                        <Button variant="contained" component="label" size="small" color="primary" style={{ marginTop: "20px" }} onClick={(e) => { this.props.open = false; this.state.over = true; }}>
                            Close
                        </Button>
                    </div>
                    <div style={{ flex: 2, overflowY: "scroll", maxHeight: "200px" }}>
                        {this.state.files.map((file, i) => this.renderFile(file, i))}

                    </div>
                </div>
     
            </DialogContent>
        </Dialog >)
    }


    renderFile(file: UploadedFile, key: number): JSX.Element {

        let status: JSX.Element = null;
        let message = "Uploading"
        let color = "#000";
        switch (file.status) {
            case "error":
                status = <LinearProgress value={100} variant="determinate" color="secondary" />;
                message = "There was an error uploading the file"
                color = "#f50057"
                break;
            case "complete":
                status = <LinearProgress value={100} variant="determinate" />;
                message = "Complete"
                break;
            case "in-flight":
                status = <LinearProgress value={file.progress} variant="determinate" />;
                message = ""
                break;
            case "uploading":
                status = <LinearProgress />;
                message = ""
                break;
            case "pending":
                status = <LinearProgress />;
                message = ""
                break;
        }
        return (<div key={key} style={{ display: "flex", marginBottom: "10px", color: color }}>
            <div style={{ flex: 1 }}>
                <InsertDriveFileIcon style={{ marginTop: "10px", color: color }} />
            </div>
            <div style={{ flex: 8 }}>
                <span style={{}}>{file.name}</span>
                {status}
                {message}
            </div>
        </div>);
    }

    inputFile(event: any) {
        event.preventDefault()
        let fileList = event.target.files;
        for (var i = 0; i < fileList.length; i++) {
            this.uploadFile(fileList.item(i));
        }
    }

    drop(event: React.DragEvent) {
        event.preventDefault()


        let fileList = event.dataTransfer.files;

        for (var i = 0; i < fileList.length; i++) {
            if (fileList.item(i).name.endsWith(".csv")) {
                this.uploadFile(fileList.item(i));
            }
        }
        this.setState({ ...this.state, over: false })
    }

    uploadFile(file: File) {
        this.setState({ ...this.state, over: false })
        let uploadFile = new UploadedFile(file)
        uploadFile.upload(this.props.url, () => this.forceUpdate())
        let files = this.state.files
        files.push(uploadFile)
        this.setState({ ...this.state, files: files })
    }
}

export default FileUpload;
