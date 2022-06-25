const YouTubeVids = (props) => {
    return <div style={{display: "flex", justifyContent: "center", gap: "5px", flexWrap: "wrap"}}>
        {
            props.data.map((video_id, index) => 
                <div key={index} >
                    <iframe width={props.width > 750 ? .475*props.width : props.width} height={props.width> 750 ? .475*props.width*9/16 : props.width*9/16} src={`https://www.youtube-nocookie.com/embed/${video_id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            )
        }
    </div>
}
export default YouTubeVids;