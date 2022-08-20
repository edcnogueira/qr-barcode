import { useRef } from "react"
import Webcam from "react-webcam"

export function LeitorDeCodigo(){

    const webcamRef = useRef(null)
    return(
        <Webcam width="400" height="400"/>
    )
}