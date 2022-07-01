import React from 'react';

const Languages = (props) => {
    const colors = {
        "C": ["#555555", "#ffffff"],
        "C#": ["#178600", "#ffffff"],
        "C++": ["#f34b7d", "#000000"],
        "Python": ["#3572A5", "#ffffff"],
        "JavaScript": ["#f1e05a", "#000000"],
        "Java": ["#b07219", "#000000"],
        "HTML": ["#e34c26", "#000000"],
        "SCSS": ["#c6538c", "#000000"],
        "CSS": ["#563d7c", "#ffffff"],
        "R": ["#198CE7", "#000000"],
        "Kotlin": ["#A97BFF", "#000000"],
        "Julia": ["#a270ba", "#000000"],
        "PHP": ["#4F5D95", "#ffffff"],
        "Assembly": ["#6E4C13", "#ffffff"],
        "SQL": ["#e38c00", "#000000"],
    }
    const defaultColors = ["#000000", "#fffff"]

    const langstyle = (lang) => { 
        return {
            backgroundColor: colors[lang] ? colors[lang][0] : defaultColors[0],
            color: colors[lang] ? colors[lang][1] : defaultColors[1],
            padding: "5px",
            borderRadius: "5px",
            opacity: "1"
        }
    }

  return (
    <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
        {
            props.data.map((lang, index) => 
                <p key={index} style={langstyle(lang)}>{lang}</p>    
            )
        }
    </div>
  )

}

export default Languages;