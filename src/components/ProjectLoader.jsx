import React from 'react';
import TodoList from './portfolio/ToDoList';
import EncryptionUsingMatrices from './portfolio/EncryptionUsingMatrices';
import Paint from './portfolio/Paint';
import PixelatedPaint from './portfolio/PixelatedPaint';
import CppPrograms from './portfolio/CppPrograms';
import Spidey from './portfolio/Spidey';

const ProjectLoader = (props) => {

    return (
        props.name === "ToDoList" ?
            <TodoList />
        : props.name === "EncryptionUsingMatrices" ?
            <EncryptionUsingMatrices />
        : props.name === "Paint" ?
            <Paint />
        : props.name === "CppPrograms" ?
            <CppPrograms />
        : props.name === "Spidey" ?
                <Spidey />
        : props.name === "PixelatedPaint" &&
            <PixelatedPaint />
    )

}

export default ProjectLoader;