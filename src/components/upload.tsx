import { useMutation, useQuery } from "convex/react";
import { FormEvent, useRef, useState } from "react";
import { api } from "../../convex/_generated/api";

export default function Upload() {
    const messages = useQuery(api.messages.list) || [];

    const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));

    const generateUploadUrl = useMutation(api.messages.generateUploadUrl);
    const sendImage = useMutation(api.messages.sendImage);

    const imageInput = useRef<HTMLInputElement>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    async function handleSendImage(event: FormEvent) {
        event.preventDefault();

        // Step 1: Get a short-lived upload URL
        const postUrl = await generateUploadUrl();
        // Step 2: POST the file to the URL
        const result = await fetch(postUrl, {
            method: "POST",
            headers: { "Content-Type": selectedImage!.type },
            body: selectedImage,
        });
        const json = await result.json();
        if (!result.ok) {
            throw new Error(`Upload failed: ${JSON.stringify(json)}`);
        }
        const { storageId } = json;
        // Step 3: Save the newly allocated storage id to the database
        await sendImage({ storageId, author: name });

        setSelectedImage(null);
        imageInput.current!.value = "";
    }
    return (
        <div>
            <h1>Convex Chat</h1>
            <ul className="max-w-sm">
                {messages.map((message) => (
                    <li key={message._id}>
                        <span>{message.author}:</span>
                        {message.format === "image" ? (
                            <Image message={message} />
                        ) : (
                            <span>{message.body}</span>
                        )}
                        <span>
                            {new Date(
                                message._creationTime
                            ).toLocaleTimeString()}
                        </span>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSendImage}>
                <input
                    type="file"
                    accept="image/*"
                    ref={imageInput}
                    onChange={(event) =>
                        setSelectedImage(event.target.files![0])
                    }
                    className="ms-2 btn btn-primary"
                    disabled={selectedImage !== null}
                />
                <input
                    type="submit"
                    value="Send Image"
                    disabled={selectedImage === null}
                />
            </form>
        </div>
    );
}

function Image({ message }: { message: { url: string } }) {
    return <img src={message.url} height="300px" width="auto" />;
}
