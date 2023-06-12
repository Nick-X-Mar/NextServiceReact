// ViberButton.js
import React from 'react';

export default function ViberButton() {
    return (
        <button
            style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
            }}
            onClick={() =>
                window.open(`viber://pa?chatURI=yourpublicaccountname`, "_blank")
            }
        >
            Open in Viber
        </button>
    )
}
