import React, { useRef } from "react";

export default function UploadFile() {
    const imageRef = useRef(null);
    const uploadFile = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", imageRef.current.files[0]);

        const res = await fetch("http://localhost:5000/upload", {
            method: "POST",
            encType: "multipart/form-data",
            body: formData,
        });
        const data = await res.json();
        console.log(formData);
        console.log(data);
    };

    return (
        <div>
            <form
                onSubmit={uploadFile}
                action="http://localhost:5000/upload"
                method="POST"
                encType="multipart/form-data"
                style={{
                    margin: "auto",
                    width: "fit-content",
                    padding: 50,
                }}
            >
                <input type="file" name="image" id="" ref={imageRef} />
                <input type="submit" value="Upload" />
            </form>
        </div>
    );
}
