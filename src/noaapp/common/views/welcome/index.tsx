import { useEffect, useState, useRef } from 'react'

const WelcomeView = () => {
    const [notes, setNotes] = useState("")
    const [htmlContent, setHtmlContent] = useState("")
    const textareaRef = useRef(null)

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
        }
    }, [notes])

    useEffect(() => {
        setHtmlContent("<strong>Welcome to NoaPad!</strong> This is an example of dynamically loaded HTML content.<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1")
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="flex items-center p-1 pb-0.5">
                <input
                    placeholder="Search..."
                    value={"@"}
                    className="w-full p-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex ml-1">
                    <button type="button" className='flex items-center justify-center h-9 w-9 text-gray-800 bg-white border rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </button>
                    <button type="button" className='flex items-center justify-center ml-1 h-9 text-gray-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex-1 flex p-1 pt-0.5">
                <div className="w-full p-2 border rounded-lg focus:outline-none bg-white shadow-md">
                    <div className="mb-3 mx-2" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                    <div className="flex-1 flex">

                        <div className="flex-1 flex-col shadow flex overflow-hidden border rounded-lg">

                            <div
                                ref={textareaRef}
                                className="w-full flex-1 p-2 rounded-lg focus:outline-none resize-none overflow-auto todo-max-h-72 min-h-32 relative"
                                contentEditable={true}
                                onInput={(e) => setNotes(e.currentTarget.innerHTML)}
                                data-placeholder="Write your notes here..."
                                style={{ position: 'relative' }}
                            >
                                {(notes === "" && false) && (
                                    <span className="absolute text-gray-400 pointer-events-none">Write your notes here...</span>
                                )}
                            </div>

                            <div className="flex items-center justify-between mt-2 p-2 pt-0 rounded-lg">
                                <div className="flex gap-2">
                                    <button type="button" className='flex items-center justify-center h-9 rounded-full border w-9'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex gap-2">
                                    <button type="button" className='flex items-center justify-center h-9 rounded-full border w-9'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
} 

export default WelcomeView