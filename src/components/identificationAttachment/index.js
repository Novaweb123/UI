import Image from "../image";
import FileDownloadIcon from "../svg/fileDownloadIcon";
import Text from "../text";
import './identificationAttachment.scss'

const IdentificationAttachment = props => {

    const fileSize = Math.round(props.fileSize / 1024) + 'kb'

    return(
        <div className="identification-attachment-card">
            <div className="identification-attachment-image">
                <Image
                    src={props.src}
                    alt={props.text}
                />
            </div>
            <div className="identification-attachment-details">
                <Text type="SPAN" text={props.text} className="title text-ellipsis"/>
                <div className="identification-attachment-file-detail">
                    <div className="idafd-detail">
                        <Text type="SPAN" text={`File size : ${fileSize} `} />
                        <Text type="SPAN" text={`File format : ${props.fileFormat} `} />
                    </div>
                    <div className="idafd-detail-download">
                        <a href={props.src} target="_blank">
                        <span onClick={props.onDownload}>
                            <FileDownloadIcon />
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdentificationAttachment;
