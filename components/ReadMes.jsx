import ReactMarkdown from 'react-markdown'
import { useState, useEffect } from 'react';
import { get_readme } from "../requests/readme_request";
import styles from '../styles/ReadMes.module.scss'

const ReadMes = (props) => {

    const [repoReadmes, setRepoReadmes] = useState([]);

    const user = "danielzelfo";

    const projecturl = (repo) => `https://github.com/${user}/${repo}`
    
    useEffect(() => {
        for (let i = 0; i < props.repos.length; ++i) {
            get_readme(user, props.repos[i])
                .then(response =>
                    setRepoReadmes(oldRepoReadmes =>
                        [
                            ...oldRepoReadmes,
                            [props.repos[i], response.data.replaceAll("](/", "](").replace(/\]\(([^)]+)\)/g, (_, url) => `](${new URL(url, projecturl(props.repos[i])+"/blob/master/").href})`)]
                        ].sort((a, b) => props.repos.indexOf(a[0]) < props.repos.indexOf(b[0]))
                    )
                )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div style={{ display: "flex", gap: "20px", flexDirection: "column", alignItems: "center" }}> {
        repoReadmes.map((readme, index) =>
        
            <div className={`subblock ${styles.subblock}`} key={index} style={{ display: "flex", flexDirection: "column" }}>
                <ReactMarkdown>
                    {readme[1]}
                </ReactMarkdown>
                <div style={{display: "flex", justifyContent: "center"}} ><a className="projbtn" href={projecturl(readme[0])} target="_blank" rel="noreferrer" >Open Github</a></div>
            </div>
        )    
    }
    </div>

}

export default ReadMes;