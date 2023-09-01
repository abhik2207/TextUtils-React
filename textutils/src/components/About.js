import React from 'react'

export default function About(props) {
    // const[myStyle, setMyStyle] = useState ({
    //     color: 'white',
    //     backgroundColor: 'black',
    //     border: '1px solid white'
    // });

    let myStyle = {
        color:props.mode==="dark"?'white':'#1c1c1c',
        backgroundColor:props.mode==="dark"?'#1c1c1c':'white',
    }

    let myStyle1 = {
        color:props.mode==="dark"?'white':'#1c1c1c',
        backgroundColor:props.mode==="dark"?'#1c1c1c':'white',
        padding:"30px",
        marginTop:"50px",
        borderRadius:"20px",
    }

    return (
        <div className='container' style={myStyle1}>
            <h1 className="my-4">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>You can analyze your text with TextUtils.</strong> Welcome to TextUtils, your go-to text editing companion! Simplify your writing tasks with ease. Transform text to uppercase, lowercase, or capitalize effortlessly. Count words, remove spaces, and perform more handy text manipulations. Boost your productivity with TextUtils, the ultimate text editing app designed to make your life simpler, one word at a time.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils is free to use.</strong> "TextUtils is not only a powerful text editing tool, but it's also completely free to use! We believe that everyone should have access to the tools they need to enhance their writing and streamline their text-related tasks, without any cost barriers. With TextUtils, you get premium text editing features without opening your wallet. Enjoy a seamless and efficient text editing experience without breaking the bank. Try TextUtils today and experience the freedom of hassle-free text editing.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils is browser compatbile and responsive.</strong> TextUtils goes the extra mile to ensure accessibility and convenience for all users. It's not bound to any specific device or browser, making it incredibly versatile. Whether you're on your computer, tablet, or smartphone, and regardless of your preferred web browser, TextUtils is ready to assist you. Its compatibility across various platforms means you can harness its powerful text editing capabilities wherever and whenever you need them. Seamlessly integrate TextUtils into your digital toolkit for a truly adaptable and user-friendly text editing experience.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
