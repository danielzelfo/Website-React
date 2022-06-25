const YouTubeVids = (props) => {
    return <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
        {
            props.data.map((video_id, index) => 
                <div key={index} >
                    <iframe width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${video_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            )
        }
    </div>
}
export default YouTubeVids;