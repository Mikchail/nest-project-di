import React from "react"
import { AppComponent } from "../base";

interface IFileUploadProps { 
  accept: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface IFileUploadState { }
class FileUpload<
  P extends IFileUploadProps = IFileUploadProps,
  S extends IFileUploadState = IFileUploadState,
  > extends AppComponent<P, S> {
    protected refInput = React.createRef<HTMLInputElement>()
    // protected handleChange(e: React.ChangeEvent<HTMLInputElement>){
    //   this.props.onChange(e);
    // }

    render(){
      return (
        <div onClick={() => this.refInput?.current?.click()}>
            <input
                type="file"
                accept={this.props.accept}
                style={{display: "none"}}
                ref={this.refInput}
                onChange={this.props.onChange}
            />
            {this.props.children}
        </div>
      )
    }
}

export type FileUploadType = typeof FileUpload;
export default FileUpload;